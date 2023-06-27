<!-- Copyright (c) 2022 by Move Closer -->

<template>
  <svg v-if="$slots.default" class="icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" v-bind="{ height, width}">
    <g :fill="color">
      <slot />
    </g>
  </svg>
  <component v-else-if="component" :is="component" v-bind="{ height, width }" :fill="color"
             aria-hidden="true" class="icon" />
</template>

<script lang="ts">
import { Component, Inject, Prop, Vue } from 'vue-property-decorator'
import { VueConstructor } from 'vue'

import { Icon as IconName } from '@/dsl/icons'

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
@Component({ name: 'Icon'})
export class Icon extends Vue {
  @Inject({ from: 'icons' })
  protected readonly icons!: Record<IconName, VueConstructor>

  @Prop({ type: String, required: false })
  public readonly color?: string

  @Prop({ type: String, required: true })
  public readonly name!: IconName

  @Prop({ type: [String, Number], required: false, default: '1em' })
  public readonly height?: string | number

  @Prop({ type: [String, Number], required: false, default: '1em' })
  public readonly width?: string | number

  public get component(): VueConstructor {
    return this.icons[this.name]
  }

}
export default Icon
</script>
