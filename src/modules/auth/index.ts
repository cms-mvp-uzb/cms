import { Container } from 'inversify'

import { IModule } from '@/toolkit/src/core/general'

import { routes } from './config'

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
export const AuthModule: IModule = {
  name: 'auth',
  providers: ((bind) => {
    //
  }),
  onload (container: Container): void {
    //
  },
  routes
}
