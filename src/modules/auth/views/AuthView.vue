<template>
  <div class="AuthView">
    <div class="AuthView__left">
      <div class="AuthView__left__header">
        Место для лого клиента
      </div>
      <div class="AuthView__left__body">
        <DDivider text="или зайти через пользователя"/>

        <form @submit.prevent="submit">
          <DInput
            :model.sync="formData.username"
            type="text"
            placeholder="Имя пользователя"
            name="username"
          />
          <DInput
            :model.sync="formData.password"
            type="password"
            placeholder="Пароль"
            name="password"
          />

          <DButton type="submit" :disabled="loading" :loading="loading">Вход</DButton>

          <span v-if="error" class="AuthView__error">
            Пароль или логин введен неверно! Повторите попытку
          </span>
        </form>
      </div>

      <div class="AuthView__left__footer">
        Место на ссылки, припомнить пароль или контакт
      </div>
    </div>

    <div class="AuthView__right">
      <img src="https://static.vecteezy.com/system/resources/previews/001/255/597/non_2x/blue-white-low-poly-triangle-shapes-background-vector.jpg" alt="">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import { AuthManagementServiceType, IAuthManagementService } from '@/shared/services/auth'

import { ILogin, LoginData, LoginServiceType } from '../services/login'
import { User } from '../contracts'

@Component({name: 'AuthView'})
export class AuthView extends Vue {
  protected authManagementService: IAuthManagementService<User> =
    this.$container.get(AuthManagementServiceType)

  protected loginService: ILogin =
    this.$container.get(LoginServiceType)

  public loading = false
  public error: string | null = null

  public formData: LoginData = {
    username: '',
    password: ''
  }

  public async submit(): Promise<void> {
    try {
      this.loading = true
      this.error = null

      const user = await this.loginService.login(this.formData)
      this.authManagementService.setToken(JSON.stringify(user))
    } catch (e: unknown) {
      this.error = (e as Error).message
    } finally {
      this.loading = false
    }
  }
}

export default AuthView
</script>
