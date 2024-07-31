<template>
  <button
    class="btn"
    v-bind="{ type }"
    :class="[resolvedThemeClass, withPrependClass, resolvedSizeClass, disabledClass, {
      '--loading': loading
    }]"
    @click="onClick"
  >
    <template>
      <span class="spinner"></span>
      <slot name="prepend" class="btn-icon" />
      <span class="btn-text">
         <slot />
      </span>
    </template>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import { Size, sizesRegistry, Theme, Themes } from '../../contracts'
import { resolveTheme } from '../../helpers/theme-resolver'

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
@Component({ name: 'Button' })
export class Button extends Vue {
  @Prop({ type: String, required: false, default: 'button' })
  public readonly type!: string

  @Prop({ type: String, required: false, default: Themes.Primary })
  public readonly theme!: Theme

  @Prop({ type: String, required: false, default: Size.Default })
  public readonly size!: Size

  @Prop({ type: Boolean, required: false, default: false })
  public readonly disabled!: boolean

  @Prop({ type: Boolean, required: false, default: false })
  public readonly loading!: boolean

  public get resolvedThemeClass (): string {
    return resolveTheme(this.theme)
  }

  public get resolvedSizeClass (): string {
    return sizesRegistry[this.size] ?? Size.Default
  }

  public get withPrependClass (): string {
    return this.$slots.prepend ? '--prepended' : ''
  }

  public get disabledClass (): string {
    return this.disabled ? '--disabled' : ''
  }

  public onClick (): void {
    this.$emit('click')
  }
}

export default Button
</script>
