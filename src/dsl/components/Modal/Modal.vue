<template>
  <div class="Modal__wrapper">
    <div class="Modal">
      <div class="Modal__header">
        <slot name="header" />
        <button @click="close" />
      </div>

      <div class="Modal__body">
        <slot />
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({ name: 'Modal' })
export class Modal extends Vue {

  public close (): void {
    this.$emit('close')
  }
}
export default Modal
</script>
