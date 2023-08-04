<template>
  <div class="Input">
    <label for="name">{{ label }}</label>
    <input v-model="_model" :name="name" :placeholder="placeholder" :type="type"
           class="Input__input">
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

  @Prop({ type: String, required: false, default: 'text' })
  public readonly type!: string

  @Prop({ type: String, required: false, default: '' })
  public readonly placeholder!: string

  @Prop({ type: String, required: true })
  public readonly name!: string
}

export default Input
</script>
