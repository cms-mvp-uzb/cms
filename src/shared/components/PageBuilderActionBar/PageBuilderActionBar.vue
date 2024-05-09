<template>
  <div class="PageBuilder__actionBar">
    <button @click="onPreview">
      <DIcon name="open" />
      Preview
    </button>
    <button @click="onSave">
      <DIcon name="save" />
      Save
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
@Component({ name: 'PageBuilderActionBar' })
export class PageBuilderActionBar extends Vue {
  public changeMode (): void {
    this.$emit('changeMode')
  }

  public onSave(): void {
    this.$emit('save')
  }

  public onPreview(): void {
    this.$emit('preview')
  }
}
export default PageBuilderActionBar
</script>
