import { Container } from 'inversify'

import { IModule } from '@/toolkit/src/core/general'

import { AuthManagementService, AuthManagementServiceType, IAuthManagementService } from '@/shared/services/auth'

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
export const RootModule: IModule = {
  name: 'root',
  providers: ((bind) => {
    bind<IAuthManagementService>(AuthManagementServiceType).to(AuthManagementService)
      .inSingletonScope()
  }),
  onload (container: Container): void {
    //
  },
  routes: []
}
