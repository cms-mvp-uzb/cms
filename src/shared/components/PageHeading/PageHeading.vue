<template>
  <div class="PageHeading">
    <div class="PageHeading__label_wrapper">
      <slot name="label">
        <h2 class="PageHeading__label">{{ label }}</h2>
      </slot>

      <div class="PageHeading__label__actions">
        <slot name="actions" />
      </div>
    </div>

    <div class="PageHeading__content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({ name: 'PageHeading' })
export class PageHeading extends Vue {
  @Prop({ type: String, required: false })
  public readonly label!: string
}
export default PageHeading
</script>
