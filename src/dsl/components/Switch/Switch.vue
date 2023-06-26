<template>
  <label class="DSwitch">
    <input class="DSwitch__input" type="checkbox" v-model="_model">
    <span class="DSwitch__label">
      <span class="DSwitch__inner"></span>
    </span>
  </label>
</template>

<script lang="ts">
import { Component, PropSync, Vue } from 'vue-property-decorator'

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
@Component({ name: 'Switch' })
export class Switch extends Vue {
  @PropSync('model', { type: Boolean, required: true })
  public _model!: boolean

}
export default Switch
</script>
