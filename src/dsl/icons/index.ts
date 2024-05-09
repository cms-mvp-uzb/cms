import {AsyncComponent, defineAsyncComponent} from 'vue'
import {Icon} from './icons'

export * from './icons'

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
export const iconsRegistry: Record<Icon, AsyncComponent> = {
  [Icon.Analytics]: defineAsyncComponent(() => import('./Analytics.vue' as string)),
  [Icon.Arrow]: defineAsyncComponent(() => import('./Arrow.vue' as string)),
  [Icon.Cube3D]: defineAsyncComponent(() => import('./Cube3D.vue' as string)),
  [Icon.Dashboard]: defineAsyncComponent(() => import('./Dashboard.vue' as string)),
  [Icon.Desktop]: defineAsyncComponent(() => import('./Desktop.vue' as string)),
  [Icon.Pages]: defineAsyncComponent(() => import('./Pages.vue' as string)),
  [Icon.Products]: defineAsyncComponent(() => import('./Products.vue' as string)),
  [Icon.Publish]: defineAsyncComponent(() => import('./Publish.vue' as string)),
  [Icon.Settings]: defineAsyncComponent(() => import('./Settings.vue' as string)),
  [Icon.Eye]: defineAsyncComponent(() => import('./EyeSharp.vue' as string)),
  [Icon.PlusCircle]: defineAsyncComponent(() => import('./PlusCircle.vue' as string)),
  [Icon.Save]: defineAsyncComponent(() => import('./Save.vue' as string)),
  [Icon.Open]: defineAsyncComponent(() => import('./Open.vue' as string)),
  [Icon.Copy]: defineAsyncComponent(() => import('./Copy.vue' as string)),
}
