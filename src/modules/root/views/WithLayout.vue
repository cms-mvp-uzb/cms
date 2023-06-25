<template>
  <SidebarTemplate v-if="isSidebarLayout">
    <template #sidebar>
      There will be sidebar menu component.
    </template>

    <template #content>
      <router-view />
    </template>
  </SidebarTemplate>

  <router-view v-else />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import { AllowedTemplates } from '@/shared/contracts/templates'
import { SidebarTemplate } from '@/shared/templates'

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
@Component({ name: 'WithLayout', components: { SidebarTemplate } })
export class WithLayout extends Vue {
  /**
   * Determines the layout based on the meta parameters passed.
   */
  public get layoutCandidate(): AllowedTemplates | undefined {
    return this.$route.meta?.template
  }

  public get isSidebarLayout (): boolean {
    return this.layoutCandidate === AllowedTemplates.Sidebar
  }
}
export default WithLayout
</script>
