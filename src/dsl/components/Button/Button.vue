<template>
  <button class="btn" v-bind="{ type }" :class="[resolvedThemeClass, withPrependClass]"
          @click="onClick">
    <slot name="prepend" class="btn-icon" />
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import { Theme, Themes } from '../../contracts'
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

  public get resolvedThemeClass (): string {
    return resolveTheme(this.theme)
  }

  public get withPrependClass (): string {
    return this.$slots.prepend ? '--prepended' : ''
  }

  public onClick (): void {
    this.$emit('click')
  }
}

export default Button
</script>
