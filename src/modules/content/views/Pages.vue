<template>
  <div style="padding: 50px">
    <DTable :headers="tableHeaders" :items="tableItems" @cell-clicked="onCellClicked" selectable>
      <template v-slot:cell-name="{ item }">
        <strong>{{ item.name }}</strong>
      </template>
    </DTable>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import { TableItem } from '@/dsl/components/Table'

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
@Component({ name: 'Pages' })
export class Pages extends Vue {
  public tableHeaders: string[] = ['Name', 'Age']
  public tableItems: TableItem[] = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 }
  ]

  public onCellClicked (payload: { item: TableItem; key: string }): void {
    console.log('Cell clicked:', payload.item, payload.key)
  }
}

export default Pages
</script>
