import { RouteConfig } from 'vue-router'
import { defineAsyncComponent } from 'vue'

import { AllowedTemplates } from '@/shared/contracts/templates'

/**
 * @author Javlon Khalimjonov <khalimjanov2000@gmail.com>
 */
export const enum RouteName {
  Analytics = 'analytics',
}

/**
 * @author Javlon Khalimjonov <khalimjanov2000@gmail.com>
 */
export const routes: Array<RouteConfig> = [
  {
    path: '/analytics', // Let's consider Dashboard view as a root.
    name: RouteName.Analytics,
    component: defineAsyncComponent(() => import('../views/Analytics.vue' as unknown as string)),
    meta: { template: AllowedTemplates.Sidebar }
  }
]
