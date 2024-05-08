<template>
  <div>
    This is Dashboard
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Card } from "@/components/Card.vue";

@Component<DashboardView>({
  name: 'DashboardView'
})
export class DashboardView extends Vue {}
export default DashboardView
</script>
