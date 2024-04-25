import { Container } from 'inversify'

import { IModule } from '@/toolkit/src/core/general'

import { routes } from './config'

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
export const EcommerceModule: IModule = {
  name: 'ecommerce',
  providers: bind => ({

  }),
  onload (container: Container): void {
    //
  },
  routes
}
