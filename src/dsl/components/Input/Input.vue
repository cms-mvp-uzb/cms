<template>
  <div class="Input">
    <label class="Input__label" for="name">{{ label }} <span v-if="required">*</span></label>
    <input v-model="_model" v-bind="{ type, name, placeholder, required, disabled }"
           class="Input__input">
    <small v-if="footer" class="Input__footer">{{ footer }}</small>
  </div>
</template>

<script lang="ts">
import { Component, Prop, PropSync, Vue } from 'vue-property-decorator'

@Component<Input>({ name: 'Input' })
export class Input extends Vue {
  @PropSync('model', { type: [String, Number], required: true })
  public _model!: string | number

  @Prop({ type: String, required: false })
  public readonly label!: string

  @Prop({ type: String, required: false })
  public readonly footer!: string

  @Prop({ type: String, required: false, default: 'text' })
  public readonly type!: string

  @Prop({ type: String, required: false, default: '' })
  public readonly placeholder!: string

  @Prop({ type: String, required: true })
  public readonly name!: string

  @Prop({ type: Boolean, required: false, default: false })
  public readonly required!: boolean

  @Prop({ type: Boolean, required: false, default: false })
  public readonly disabled!: boolean
}

export default Input
</script>
