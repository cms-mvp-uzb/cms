<template>
  <div id="app">
    <AuthView v-if="!isAuthenticated" />
    <WithLayout v-else />
    <Modal />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import {
  AuthManagementServiceType,
  AuthState,
  IAuthManagementService
} from '@/shared/services/auth'

import { AuthView } from './modules/auth/views/AuthView.vue'
import { WithLayout } from './modules/root/views/WithLayout.vue'
import { Modal } from './shared/components/Modal'

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
@Component<App>({
  name: 'App',
  components: { Modal, WithLayout, AuthView },
  created (): void {
    this.createAuthSubscription()
  }
})
export class App extends Vue {
  protected authManagementService: IAuthManagementService<{ name: string}> =
    this.$container.get(AuthManagementServiceType)

  public isAuthenticated = false

  protected createAuthSubscription (): void {
    this.authManagementService.$subscription().subscribe((state) => {
      switch (state) {
        case AuthState.BootedWithToken:
          this.isAuthenticated = true
          console.log('Booted with token')
          break
        case AuthState.Authorized:
          this.isAuthenticated = true
          console.log('Authorized')
          break
        case AuthState.Unauthorized:
          this.isAuthenticated = false
          console.log('Unauthorized')
          break
      }
    })
  }
}
export default App
</script>
