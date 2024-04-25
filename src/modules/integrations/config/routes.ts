import { RouteConfig } from 'vue-router'
import { defineAsyncComponent } from 'vue'

import { AllowedTemplates } from '@/shared/contracts/templates'

/**
 * @author Javlon Khalimjonov <khalimjanov2000@gmail.com>
 */
export const enum RouteName {
  Integrations = 'integrations',
}

/**
 * @author Javlon Khalimjonov <khalimjanov2000@gmail.com>
 */
export const routes: Array<RouteConfig> = [
  {
    path: '/integrations', // Let's consider Dashboard view as a root.
    name: RouteName.Integrations,
    component: defineAsyncComponent(() => import('../views/Ecommerce.vue' as unknown as string)),
    meta: { template: AllowedTemplates.Sidebar }
  }
]
