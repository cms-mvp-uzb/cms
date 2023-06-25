import { RouteConfig } from 'vue-router'
import { defineAsyncComponent } from 'vue'

import { AllowedTemplates } from '@/shared/contracts/templates'

/**
 * @author Javlon Khalimjonov <khalimjanov2000@gmail.com>
 */
export const enum RouteName {
  Dashboard = 'dashboard',
}

/**
 * @author Javlon Khalimjonov <khalimjanov2000@gmail.com>
 */
export const routes: Array<RouteConfig> = [
  {
    path: '/', // Let's consider Dashboard view as a root.
    name: RouteName.Dashboard,
    component: defineAsyncComponent(() => import('../views/DashboardView.vue' as unknown as string)),
    meta: { template: AllowedTemplates.Sidebar }
  }
]
