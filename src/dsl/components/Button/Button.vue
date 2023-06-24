<template>
  <button class="btn" :class="[resolvedThemeClass]">
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
@Component({ name: 'Button' })
export class Button extends Vue {
  @Prop({ type: String, required: false })
  public readonly theme!: string

  public get resolvedThemeClass (): string {
    return 'btn-primary'
  }
}

export default Button
</script>
