import { RouteConfig } from 'vue-router'
import { defineAsyncComponent } from 'vue'

import { AllowedTemplates } from '@/shared/contracts/templates'

/**
 * @author Javlon Khalimjonov <khalimjanov2000@gmail.com>
 */
export const enum RouteName {
  Settings = 'settings',
}

/**
 * @author Javlon Khalimjonov <khalimjanov2000@gmail.com>
 */
export const routes: Array<RouteConfig> = [
  {
    path: '/settings', // Let's consider Dashboard view as a root.
    name: RouteName.Settings,
    component: defineAsyncComponent(() => import('../views/Analytics.vue' as unknown as string)),
    meta: { template: AllowedTemplates.Sidebar }
  }
]
