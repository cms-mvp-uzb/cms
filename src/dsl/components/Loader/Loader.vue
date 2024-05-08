<template>
  <div class="DSpinnerSquare">
    <div class="square-1 square"></div>
    <div class="square-2 square"></div>
    <div class="square-3 square"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ name: 'Loader' })
export class Loader extends Vue {

}
export default Loader
</script>
