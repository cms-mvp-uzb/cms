<template>
  <div>
    There will be tree of available pages to edit in editor.
    <DSwitch :model.sync="checked" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
@Component({ name: 'Pages' })
export class Pages extends Vue {

  public checked = false
}
export default Pages
</script>
