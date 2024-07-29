import { injectable } from 'inversify'

import { IHttpConnector } from '@/toolkit/src/core/connectors/http'

import { User } from '../../contracts'
import { ILogin, LoginData } from './contracts'

@injectable()
export class LoginService implements ILogin {
  protected connector: IHttpConnector

  constructor (connector: IHttpConnector) {
    this.connector = connector
  }

  public async login (payload: LoginData): Promise<User> {
    const response = await this.connector.call('auth', 'login', {} ,payload)
    return response.data.user as User
  }
}
