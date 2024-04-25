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
@Component<Ecommerce>({
  name: 'Ecommerce',
})
export class Ecommerce extends Vue {
  public goToEditor (): void {
    this.$router.push({ name: 'content.editor' })
  }
}
export default Ecommerce
</script>
