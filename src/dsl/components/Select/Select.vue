<template>
  <div class="Select">
    <span v-if="label" class="Select__label">
      {{ label }}
      <span v-if="required">*</span>
    </span>

    <v-select
      :options="options"
      v-model="_model"
      :placeholder="placeholder"
      selectLabel=""
      selectedLabel=""
      deselectLabel=""
      track-by="value"
      label="label" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue } from 'vue-property-decorator'
import multiselect from 'vue-multiselect'
import { SelectOptions } from './Select.contracts'

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
@Component({ name: 'Button', components: { vSelect: multiselect } })
export class Select extends Vue {
  @Prop({ type: String, required: false })
  public readonly label?: string

  @Prop({ type: String, required: false, default: 'Select' })
  public readonly placeholder?: string

  @Prop({ type: Boolean, required: false, default: false })
  public readonly required!: boolean

  @PropSync('model', { type: [String, Object], required: false })
  public readonly _model?: string | any

  @Prop({ type: Array, required: false, default: [] })
  public readonly options!: SelectOptions
}

export default Select
</script>
