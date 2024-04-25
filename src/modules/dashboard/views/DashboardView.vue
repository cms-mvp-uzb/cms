<template>
  <div>
    <div>
      <Card v-for="(item, index) in count" :key="index" :title="item.title" :text="item.text" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Card } from "@/components/Card.vue";

@Component<DashboardView>({
  name: 'DashboardView',
  components: {
    Card
  }
})
export class DashboardView extends Vue {
  public title = 'TTTTTT'
  public count = [
    {
      title: 'Test',
      text: 'tetete'
    },
    {
      title: 'Test',
      text: 'tetete'
    },
    {
      title: 'Test',
      text: 'tetete'
    }
  ]
}
export default DashboardView
</script>
