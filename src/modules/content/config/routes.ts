import {RouteConfig} from 'vue-router'
import { defineAsyncComponent, defineComponent } from 'vue'
import { AllowedTemplates } from '@/shared/contracts/templates'

/**
 * @author Javlon Khalimjonov <khalimjanov2000@gmail.com>
 */
export const enum RouteName {
  Editor = 'editor',
  Pages = 'pages'
}

/**
 * @author Javlon Khalimjonov <khalimjanov2000@gmail.com>
 */
export const routes: Array<RouteConfig> = [
  {
    path: '/editor',
    name: RouteName.Editor,
    component: defineAsyncComponent(() => import('../views/EditorView.vue' as unknown as string))
  },
  {
    path: '/pages',
    name: RouteName.Pages,
    component: defineAsyncComponent(() => import('../views/Pages.vue' as unknown as string)),
    meta: { template: AllowedTemplates.Sidebar }
  }
]
