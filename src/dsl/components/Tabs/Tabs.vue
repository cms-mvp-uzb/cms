<template>
  <div>
    <div class="Tabs">
      <ul>
        <li v-for="tab in Object.values(tabs)" :key="tab.name" :class="{ '--isActive': tab.name === activeTab }">
          <a :href="'#'+tab.name">
            {{ tab.title }}
          </a>
        </li>
      </ul>
    </div>

    <div class="Tabs__content">
      <slot v-bind="{ activeTab }"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import { Tabs as TabsDef } from './Tabs.contracts'
import {tabs} from "@/shared/components/PageBuilder/PageBuilder.config";

@Component({ name: 'Tabs' })
export class Tabs extends Vue {
  @Prop({ type: Array, required: true })
  public readonly tabs!: TabsDef

  public get activeTab (): string {
    return this.$route.hash.length > 0
      ? this.$route.hash.split('#')[1]
      : (Object.values(this.tabs).find(el => el.isActive)?.name ?? '')
  }
}
export default Tabs
</script>
