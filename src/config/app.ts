import { BootstrappedApp } from '@/toolkit/src/core/bootstrap/bootstrapper.contracts';
import { Bootstrap } from '@/toolkit/src/core';

/**
 * Method that defines the application creation process after bootstrap.
 */
export async function createApp (context?: any): Promise<BootstrappedApp> {
  const bootstrapper = new Bootstrap('cms', [], context)
  const bootedApp = await bootstrapper.boot()

  return { ...bootedApp }
}
