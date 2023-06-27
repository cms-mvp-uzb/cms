<template>
  <div class="PageBuilder__actionBar">
    <DIconButton iconName="settings" />
    <DButton>
      <template #prepend>
        <DIcon name="publish" />
      </template>
      Publish
    </DButton>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
@Component({ name: 'PageBuilderActionBar' })
export class PageBuilderActionBar extends Vue {

}
export default PageBuilderActionBar
</script>
