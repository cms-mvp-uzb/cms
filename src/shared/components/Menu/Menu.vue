<template>
  <aside class="Menu">
    <ul class="Menu__items">
      <li v-for="item in menuItems" :key="item.key" class="Menu__items__item">
        <router-link :to="{ name: item.route }" >
          <DIcon :width="18" :height="18" v-if="item.icon" :name="item.icon" />
          {{ item.label }}
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import { MenuItem } from '@/shared/contracts/menu'

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
@Component({ name: 'Menu' })
export class Menu extends Vue {
  @Prop({ type: Array, required: false, default: () => ([]) })
  public readonly menuItems!: MenuItem[]
}
export default Menu
</script>
