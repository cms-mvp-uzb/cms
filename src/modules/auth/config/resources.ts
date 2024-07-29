import { IResource } from '@/toolkit/src/core/general'

/**
 * @author Javlon Khalimjonov <khalimjanov2000@gmail.com>
 */
export const AuthResources: IResource = {
  name: 'auth',
  prefix: '',
  resources: {
    login: {
      url: 'login',
      method: 'POST',
    },
  }
}
