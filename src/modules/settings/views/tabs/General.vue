<template>
  <div class="general">
    general view
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'

/**
 * @author Maciej Perzankowski <perzankowski.maciej@gmail.com>
 */
@Component<GeneralView>({
  name: 'GeneralView',
  components: {},
})
export class GeneralView extends Vue {
}

export default GeneralView
</script>
