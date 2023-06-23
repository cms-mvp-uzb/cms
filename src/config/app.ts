import { BootstrappedApp } from '@/toolkit/src/core/bootstrap/bootstrapper.contracts'
import { Bootstrap } from '@/toolkit/src/core'

import { modules } from './modules'

/**
 * Method that defines the application creation process after bootstrap.
 */
export async function createApp (): Promise<BootstrappedApp> {
  const bootstrapper = new Bootstrap('cms', modules)
  const bootedApp = await bootstrapper.boot()

  return { ...bootedApp }
}
