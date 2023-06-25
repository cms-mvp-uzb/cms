import { Container } from 'inversify'

import { IModule } from '@/toolkit/src/core/general'

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
export const RootModule: IModule = {
  name: 'root',
  providers: bind => ({

  }),
  onload (container: Container): void {
    //
  },
  routes: []
}
