import { AnalyticsModule } from '../modules/analytics'
import { AuthModule } from '../modules/auth'
import { ContentModule } from '../modules/content'
import { DashboardModule } from '../modules/dashboard'
import { RootModule } from '../modules/root'
import { SettingsModule } from "../modules/settings"
import { IntegrationsModule } from "../modules/integrations"
import { EcommerceModule } from "../modules/ecommerce"

/**
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl>
 */
export const modules = [
  RootModule,
  AuthModule,
  AnalyticsModule,
  ContentModule,
  EcommerceModule,
  DashboardModule,
  IntegrationsModule,
  SettingsModule
]
