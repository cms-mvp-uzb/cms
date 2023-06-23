<template>
  <div class="PageBuilder">
    <BlockShelf :itemsRegistry="blockCollection" :containersRegistry="containersCollection" />

    <div class="PageBuilder__workspace__area">
      <Constructor v-show="activeMode === mode.Edit"
                   :blocks.sync="blocks"
                   :containers.sync="containers" />

      <Renderer v-show="activeMode === mode.View"
                :blocks.sync="blocks"
                :containers.sync="containers" />
    </div>

    <BlockEditor :block="selectedBlock" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

import {
  availableContainers,
  availableElements,
  PossibleContainer,
  PossibleElements
} from '@/constructor/src/builder/defaults'
import {
  Constructor,
  IBlock,
  Renderer,
  BlockEditor,
  BlockShelf,
  BlockShelfItemsRegistry
} from '@/constructor/src/builder/modules'
import { PageBuilderMode } from '@/constructor/src/builder/contracts'

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
@Component<PageBuilder>({
  name: 'PageBuilder',
  components: { Renderer, Constructor, BlockEditor, BlockShelf },
  created (): void {
    this.setDefaultSelection()
    this.buildBlocks()
    this.buildContainers()
  }
})
export class PageBuilder extends Vue {
  @Prop({ type: Array, required: true })
  public blockSet!: IBlock[]

  @Prop({ type: Array, required: true })
  public containerSet!: IBlock[]

  public blocks: IBlock[] = []
  public containers: IBlock[] = []

  public readonly mode = PageBuilderMode

  public activeMode: PageBuilderMode = PageBuilderMode.Edit

  /**
   * Determines combined "outer" and "inner" blocks.
   */
  public get allBlocks (): IBlock[] {
    return [
      ...this.containers,
      ...this.blocks
    ]
  }

  /**
   * Collection of default and custom blocks to be passed to shelf.
   */
  public get blockCollection (): BlockShelfItemsRegistry<PossibleElements> {
    return {
      ...availableElements
    }
  }

  public get containersCollection (): BlockShelfItemsRegistry<PossibleContainer> {
    return {
      ...availableContainers
    }
  }

  /**
   * Determines if there selected block in blocks.
   */
  public get hasSelectedBlock (): boolean {
    return this.allBlocks.some((block: IBlock) => block.selected)
  }

  /**
   * Determines selected block.
   */
  public get selectedBlock (): IBlock | undefined {
    if (!this.hasSelectedBlock) {
      return
    }

    return this.allBlocks.filter((block: IBlock) => block.selected)[0]
  }

  /**
   * Builds and sorts "inner" blocks
   */
  private buildBlocks (): void {
    this.blocks = this.blockSet.sort((a, b) => {
      return a.order - b.order
    })
  }

  /**
   * Builds and sorts "outer" blocks
   */
  private buildContainers (): void {
    this.containers = this.containerSet.sort((a, b) => {
      return a.order - b.order
    })
  }

  /**
   * Handles onSave event of Constructor.
   */
  public handleOnSave (): void {
    this.$emit('onSave', { elements: this.blocks, containers: this.containers })
  }

  /**
   * Sets all selected option as false for all existing containers/blocks.
   */
  public setDefaultSelection (): void {
    this.blocks = this.blockSet.map(block =>({
      ...block,
      selected: false
    }))

    this.containers = this.containerSet.map(container => ({
      ...container,
      selected: false
    }))
 }

  @Watch('blockSet')
  protected onBlocks (): void {
    this.buildBlocks()
  }

  @Watch('containerSet')
  protected onContainers (): void {
    this.buildContainers()
  }
}
export default PageBuilder
</script>

<style lang="scss">
.PageBuilder {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;

  height: 100%;

  &__workspace {
    &__area {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
