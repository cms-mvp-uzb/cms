import { RouteConfig } from 'vue-router'
import { defineAsyncComponent } from 'vue'

/**
 * @author Javlon Khalimjonov <khalimjanov2000@gmail.com>
 */
export const enum RouteName {
  Editor = 'editor',
}

/**
 * @author Javlon Khalimjonov <khalimjanov2000@gmail.com>
 */
export const routes: Array<RouteConfig> = [
  {
    path: '/editor/?:id',
    name: RouteName.Editor,
    component: defineAsyncComponent(() => import('../views/EditorView.vue' as unknown as string))
  }
]
