<template>
  <div class="Modal__wrapper">
    <div class="Modal" :class="[sizeClass]">
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
import { Component, Prop, Vue } from 'vue-property-decorator'
import { ModalSize, modalSizeClassRegistry } from './Modal.contracts'

@Component({ name: 'Modal' })
export class Modal extends Vue {
  @Prop({ type: String, required: false, default: ModalSize.Small })
  public readonly size!: ModalSize

  public get sizeClass (): string {
    return modalSizeClassRegistry[this.size]
  }

  public close (): void {
    this.$emit('close')
  }
}
export default Modal
</script>
