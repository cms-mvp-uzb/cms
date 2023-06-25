<template>
  <div id="app">
    <WithLayout />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { WithLayout } from './modules/root/views/WithLayout.vue'
/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
@Component<App>({ name: 'App', components: { WithLayout } })
export class App extends Vue {}
export default App
</script>
