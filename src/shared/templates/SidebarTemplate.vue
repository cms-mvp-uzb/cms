<template>
  <div class="SidebarTemplate__container">
    <div class="SidebarTemplate__sidebar">
      <slot name="sidebar" />
    </div>
    <div class="SidebarTemplate__content">
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
@Component({ name: 'SidebarTemplate' })
export class SidebarTemplate extends Vue {}
export default SidebarTemplate
</script>
