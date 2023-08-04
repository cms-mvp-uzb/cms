<template>
  <div class="AuthView">
    <div class="AuthView__left">
      <div class="AuthView__left__header">
        There will be header (logo, etc...)
      </div>
      <div class="AuthView__left__body">
        <DDivider text="or sign in with" />
        <form @submit.prevent="submit">
          <DInput :model.sync="formData.email" type="email" placeholder="E-mail" name="email" />
          <DInput :model.sync="formData.password" type="password" placeholder="Password"
                  name="password" />
          <DButton type="submit">Login</DButton>
        </form>
      </div>

      <div class="AuthView__left__footer">
        There will be some links (forgot password, new here, contact, ect...)
      </div>
    </div>

    <div class="AuthView__right">
      <img src="https://cdn.wallpapersafari.com/48/66/H5MI2l.jpg" alt="">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import { AnyObject } from '@/toolkit/src/core/general'

import { AuthManagementServiceType, IAuthManagementService } from '@/shared/services/auth'

@Component({ name: 'AuthView' })
export class AuthView extends Vue {
  protected authManagementService: IAuthManagementService<{ name: string }> =
    this.$container.get(AuthManagementServiceType)

  public formData: AnyObject = {
    email: '',
    password: ''
  }

  public submit (): void {
    this.authManagementService.setToken('example-token')
  }
}

export default AuthView
</script>