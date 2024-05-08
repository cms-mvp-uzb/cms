<template>
  <table class="DTable">
    <thead>
    <tr>
      <th v-if="selectable" class="selectable">
        <input type="checkbox" v-model="selectAll" @change="selectAllRows">
      </th>
      <th v-for="header in headers" :key="header" @click="sortTable(header)">
        {{ header }}
        <span v-if="sortedColumn === header" :class="{
            'sort-arrow': true,
            'sort-asc': sortDirection === 'asc',
            'sort-desc': sortDirection === 'desc'
          }">
            <i class="fas fa-sort-up" v-if="sortDirection === 'asc'"></i>
            <i class="fas fa-sort-down" v-if="sortDirection === 'desc'"></i>
          </span>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item, index) in sortedItems" :key="item.id">
      <td v-if="selectable" class="selectable">
        <input type="checkbox" v-model="selectedRows[index]">
      </td>
      <td v-for="(value, key) in item" :key="key" class="DTable__cell" @click="(e) => cellClicked(e, item, key)">
        <slot :name="'cell-' + key" v-bind="{ item }">{{ value }}</slot>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import { TableItem } from './Table.contracts'

@Component({ name: 'Table' })
export class Table extends Vue {
  @Prop({ type: Array, required: true })
  public readonly headers!: string[]

  @Prop({ type: Array, required: true })
  public readonly items!: TableItem[]

  @Prop({ type: Boolean, required: false, default: false })
  public readonly selectable!: boolean

  public selectAll = false
  public selectedRows: boolean[] = []

  public sortedColumn: string | null = null
  public sortDirection = 'asc'

  public get sortedItems (): TableItem[] {
    if (!this.sortedColumn) {
      return this.items
    }

    return this.items.slice().sort((a, b) => {
      const aValue = a[this.sortedColumn ?? '']
      const bValue = b[this.sortedColumn ?? '']

      if (this.sortDirection === 'asc') {
        return aValue > bValue ? 1 : -1
      } else {
        return aValue < bValue ? 1 : -1
      }
    })
  }

  public cellClicked (e: MouseEvent, item: TableItem, key: string): void {
    e.stopPropagation()
    this.$emit('cell-clicked', { item, key })
  }

  public selectAllRows (): void {
    this.selectedRows = new Array(this.sortedItems.length).fill(this.selectAll)
  }

  public sortTable (header: string) {
    if (this.sortedColumn === header) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc'
    } else {
      this.sortedColumn = header
      this.sortDirection = 'asc'
    }
  }
}

export default Table
</script>
