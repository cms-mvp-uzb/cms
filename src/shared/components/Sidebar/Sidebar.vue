<template>
  <div class="Sidebar">
    <div class="Sidebar__top">
      <img class="Sidebar__logo" src="https://logowik.com/content/uploads/images/cms6630.logowik.com.webp" alt="logo">
      <Menu :menuItems="items" />
    </div>

    <DButton theme="outline" @click="logout">Log Out</DButton>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import { AuthManagementServiceType, IAuthManagementService } from '@/shared/services/auth'
import { MenuItem } from '@/shared/contracts/menu'
import { menu } from '@/config/menu'

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
  protected authManagementService: IAuthManagementService<{ name: string }> =
    this.$container.get(AuthManagementServiceType)

  public get items(): MenuItem[] {
    return menu.map((item) => {
      return {
        ...item
      }
    })
  }

  public logout (): void {
    this.authManagementService.deleteToken()
  }
}
export default Sidebar
</script>
