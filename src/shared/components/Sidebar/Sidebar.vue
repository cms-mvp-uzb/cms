<template>
  <div class="Sidebar">
    <ul>
      <li v-for="item in items" :key="item.key">
        <router-link :to="{ name: item.route }">
          {{ item.label }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import { menu } from '@/config/menu'

import { MenuItem } from '@/shared/contracts/menu'

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
@Component({ name: 'Sidebar' })
export class Sidebar extends Vue {
  public get items(): MenuItem[] {
    return menu.map((item) => {
      return {
        ...item
      }
    })
  }
}
export default Sidebar
</script>
