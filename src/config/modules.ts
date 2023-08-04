import { ContentModule } from '../modules/content'
import { DashboardModule } from '../modules/dashboard'
import { RootModule } from '../modules/root'
import { AuthModule } from '../modules/auth'

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
export const modules = [
  RootModule,
  AuthModule,
  DashboardModule,
  ContentModule
]
