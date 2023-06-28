<template>
  <div class="Sidebar">
    <Menu :menuItems="items" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import { menu } from '@/config/menu'

import { MenuItem } from '@/shared/contracts/menu'

import { Menu } from '../../components/Menu'

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
@Component({
  name: 'Sidebar',
  components: {
    Menu
  }
})
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
