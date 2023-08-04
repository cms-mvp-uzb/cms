<template>
  <div>
     <DButton @click="goToEditor">Go To Editor</DButton>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
@Component<DashboardView>({
  name: 'DashboardView',
})
export class DashboardView extends Vue {
  public goToEditor (): void {
    this.$router.push({ name: 'content.editor' })
  }
}
export default DashboardView
</script>
