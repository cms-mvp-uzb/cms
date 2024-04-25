<template>
  <component
    v-if="open"
    :is="component"
    :payload="state.payload"
    @close="handleClose"
  />
</template>

<script lang="ts">
import { Component, Vue} from "vue-property-decorator"
import { VueConstructor } from "vue"
import { ModalServiceType, ModalState } from "@/toolkit/src/core/services/modal"

@Component({ name: 'Modal' })
export class Modal extends Vue {
  protected readonly modalService =
    this.$container.get(ModalServiceType)

  public get state (): ModalState {
    return this.modalService.state$
  }

  public get component (): VueConstructor | undefined {
    return this.state.modal
  }

  public get open (): boolean {
    return this.state.open ?? false
  }

  public handleClose(): void {
    console.log('Clicked')
    this.modalService.close()
  }
}
export default Modal
</script>
