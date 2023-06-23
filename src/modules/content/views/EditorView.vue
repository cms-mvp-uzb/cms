<template>
  <div>
     <PageBuilder :blockSet="[]" :containerSet="[]" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import { PageBuilder } from '@/shared/components/PageBuilder'

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
@Component<EditorView>({
  name: 'EditorView',
  components: { PageBuilder }
})
export class EditorView extends Vue {

}
export default EditorView
</script>
