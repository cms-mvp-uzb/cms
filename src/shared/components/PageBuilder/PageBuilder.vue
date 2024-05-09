<template>
  <div :class="{ '--open': visible }" class="PageBuilder">
    <div class="PageBuilder__workspace">
      <BlockShelf
        :containersRegistry="containersCollection"
        :itemsRegistry="blockCollection"
        @goBack="goBack"
        @visible="toggleVisibility"
      />

      <div class="PageBuilder__workspace__right__container">
        <PageBuilderActionBar
          @changeMode="handleChangeMode"
          @preview="handlePreview"
          @save="handleOnSave"
        />

        <div class="PageBuilder__workspace__right__content">
          <div class="PageBuilder__workspace__area">
            <Constructor v-show="activeMode === mode.Edit"
                         :blocks.sync="blocks"
                         :containers.sync="containers"
                         :uiRegistry="uiRegistry"/>

            <Renderer v-show="activeMode === mode.View"
                      :blocks.sync="blocks"
                      :containers.sync="containers"
                      :uiRegistry="uiRegistry"/>
          </div>

          <div class="PageBuilder__workspace__right__editor">
            <DTabs :tabs="tabs">
              <template #default="{ activeTab }">
                <BlockEditor
                  v-show="activeTab === tab.General"
                  :block="selectedBlock"
                  :formRegistry="formsRegistry"/>
              </template>
            </DTabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator'

import {
  availableContainers,
  availableElements,
  blocksFormRegistry,
  blocksUiRegistry,
  PossibleContainer,
  PossibleElements
} from '@/constructor/src/builder/defaults'
import {
  BlockEditor,
  BlockShelf,
  BlockShelfItemsRegistry,
  Constructor,
  IBlock,
  Renderer
} from '@/constructor/src/builder/modules'
import {PageBuilderMode} from '@/constructor/src/builder/contracts'

import {PageBuilderActionBar} from '../PageBuilderActionBar'
import {Tab, tabs} from './PageBuilder.config'
import {VueConstructor} from "vue";

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
@Component<PageBuilder>({
  name: 'PageBuilder',
  components: {Renderer, Constructor, BlockEditor, BlockShelf, PageBuilderActionBar},
  mounted(): void {
    this.buildContainers()
    this.buildBlocks()
    this.setDefaultSelection()
  }
})
export class PageBuilder extends Vue {
  @Prop({type: Array, required: true})
  public blockSet!: IBlock[]

  @Prop({type: Array, required: true})
  public containerSet!: IBlock[]

  @Prop({type: Object, required: false, default: () => ({})})
  public customBlocks!: BlockShelfItemsRegistry

  @Prop({type: Object, required: false, default: () => ({})})
  public customForms!: Record<PossibleElements, VueConstructor>

  @Prop({type: Object, required: false, default: () => ({})})
  public customUserInterfaces!: Record<PossibleElements, VueConstructor>

  public blocks: IBlock[] = []
  public containers: IBlock[] = []
  public visible = true

  public readonly mode = PageBuilderMode
  public readonly tab = Tab
  public readonly tabs = tabs

  public activeMode: PageBuilderMode = PageBuilderMode.Edit

  /**
   * Determines combined "outer" and "inner" blocks.
   */
  public get allBlocks(): IBlock[] {
    return [
      ...this.containers,
      ...this.blocks
    ]
  }

  /**
   * Collection of default and custom blocks to be passed to shelf.
   */
  public get blockCollection(): BlockShelfItemsRegistry<PossibleElements> {
    return {
      ...availableElements,
      ...this.customBlocks
    }
  }

  public get containersCollection(): BlockShelfItemsRegistry<PossibleContainer> {
    return {
      ...availableContainers
    }
  }

  public get formsRegistry(): Record<PossibleElements, VueConstructor> {
    return {
      ...blocksFormRegistry,
      ...this.customForms
    }
  }

  public get uiRegistry(): Record<PossibleElements, VueConstructor> {
    return {
      ...blocksUiRegistry,
      ...this.customUserInterfaces
    }
  }

  /**
   * Determines if there selected block in blocks.
   */
  public get hasSelectedBlock(): boolean {
    return this.allBlocks.some((block: IBlock) => block.selected)
  }

  /**
   * Determines selected block.
   */
  public get selectedBlock(): IBlock | undefined {
    if (!this.hasSelectedBlock) {
      return
    }

    return this.allBlocks.find((block: IBlock) => block.selected)
  }

  public toggleVisibility(): void {
    this.visible = !this.visible
  }

  public goBack(): void {
    this.$router.go(-1)
  }

  public handleChangeMode(): void {
    if (this.activeMode === PageBuilderMode.Edit) {
      this.activeMode = PageBuilderMode.View
    } else {
      this.activeMode = PageBuilderMode.Edit
    }
  }

  /**
   * Handles onSave event of Constructor.
   */
  public handleOnSave(): void {
    this.$emit('save', {
      elements: this.blocks,
      containers: this.containers
    })
  }

  public handlePreview(): void {
    this.$emit('preview')
  }

  /**
   * Sets all selected option as false for all existing containers/blocks.
   */
  public setDefaultSelection(): void {
    this.blocks = [...this.blocks].map(block => ({
      ...block,
      selected: false
    }))

    this.containers = [...this.containers].map(container => ({
      ...container,
      selected: false
    }))
  }

  @Watch('blockSet')
  protected onBlocks(): void {
    this.buildBlocks()
  }

  @Watch('containersSet')
  protected onContainers(): void {
    this.buildContainers()
  }

  /**
   * Builds and sorts "inner" blocks
   */
  private buildBlocks(): void {
    this.blocks = [...this.blockSet].slice().sort((a, b) => {
      return a.order - b.order
    })
  }

  /**
   * Builds and sorts "outer" blocks
   */
  private buildContainers(): void {
    this.containers = [...this.containerSet].slice().sort((a, b) => {
      return a.order - b.order
    })
  }
}

export default PageBuilder
</script>

