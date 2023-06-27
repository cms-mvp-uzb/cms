import { AsyncComponent, defineAsyncComponent } from 'vue'

export * from './icons'

import { Icon } from './icons'

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
export const iconsRegistry: Record<Icon, AsyncComponent> = {
  [Icon.Desktop]: defineAsyncComponent(() => import('./Desktop.vue' as string)),
  [Icon.Publish]: defineAsyncComponent(() => import('./Publish.vue' as string)),
  [Icon.Settings]: defineAsyncComponent(() => import('./Settings.vue' as string)),
}
