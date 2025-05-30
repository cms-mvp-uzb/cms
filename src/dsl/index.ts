import { VueConstructor } from 'vue'

import { componentsRegistry } from './registry'
import { iconsRegistry } from './icons'

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
export const DashboardDSL = {
  install: (_Vue: VueConstructor, config: { prefix: string }) => {
    for (const [name, component] of Object.entries(componentsRegistry)) {
      _Vue.component(`${config.prefix}${name}`, component)
    }

    _Vue.mixin({
      provide: {
        icons: iconsRegistry
      }
    })
  }
}
