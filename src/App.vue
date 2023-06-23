<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
@Component<App>({ name: 'App' })
export class App extends Vue {}
export default App
</script>

<style lang="scss" scoped>
</style>
