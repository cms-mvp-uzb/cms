import { RouteConfig } from 'vue-router'
import { defineAsyncComponent } from 'vue'

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
    path: '/',
    name: RouteName.Dashboard,
    component: defineAsyncComponent(() => import('../views/DashboardView.vue' as unknown as string))
  }
]
