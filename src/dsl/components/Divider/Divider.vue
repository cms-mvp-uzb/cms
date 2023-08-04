<template>
  <span class="Divider">{{ text }}</span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({ name: 'Divider' })
export class Divider extends Vue {
  @Prop({ type: String, required: false })
  public readonly text?: string
}
export default Divider
</script>