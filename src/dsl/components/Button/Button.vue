<template>
  <button class="btn" :class="[resolvedThemeClass]">
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
  @Prop({ type: String, required: false, default: Themes.Primary })
  public readonly theme!: Theme

  public get resolvedThemeClass (): string {
    return resolveTheme(this.theme)
  }
}

export default Button
</script>
