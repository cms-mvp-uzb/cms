<template>
  <div class="layouts">
    <DButton class="layouts__create" @click="goToEditor">Create Layout</DButton>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

/**
 * @author Maciej Perzankowski <perzankowski.maciej@gmail.com>
 */
@Component<LayoutsView>({
  name: 'LayoutsView',
  components: {},
})
export class LayoutsView extends Vue {
  public goToEditor(): void {
    this.$router.push({name: 'content.editor'})
  }
}

export default LayoutsView
</script>
