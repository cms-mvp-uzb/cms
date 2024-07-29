import { Container } from 'inversify'

import { IModule } from '@/toolkit/src/core/general'
import { HttpConnectorType, IHttpConnector } from '@/toolkit/src/core/connectors/http'

import { routes, AuthResources } from './config'
import { ILogin, LoginService, LoginServiceType } from './services/login'

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
export const AuthModule: IModule = {
  name: 'auth',
  providers: ((bind) => {
    bind<ILogin>(LoginServiceType).toDynamicValue((context) => {
      return new LoginService(context.container.get<IHttpConnector>(HttpConnectorType))
    })
  }),
  onload (container: Container): void {
    const connector = container.get<IHttpConnector>(HttpConnectorType)

    connector.registerResource(AuthResources)
  },
  routes,
}
