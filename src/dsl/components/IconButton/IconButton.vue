<template>
  <button class="DIconButton" :class="[{ '--disabled': isDisabled },resolvedThemeClass]"
          :disabled="isDisabled">
    <DIcon :name="iconName" width="18" height="18" />
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import { Theme, Themes } from '../../contracts'
import { resolveTheme } from '../../helpers/theme-resolver'

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
@Component({ name: 'IconButton' })
export class IconButton extends Vue {
  @Prop({ type: String, required: false, default: Themes.Primary })
  public readonly theme!: Theme

  @Prop({ type: String, required: true })
  public readonly iconName!: string

  @Prop({ type: Boolean, required: false, default: false })
  public readonly isDisabled!: boolean

  public get resolvedThemeClass (): string {
    return resolveTheme(this.theme)
  }
}

export default IconButton
</script>
