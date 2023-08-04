import { Observable } from 'rxjs'

export interface IAuthManagementService<U extends unknown = unknown> {
  deleteToken (): void
  exists (): boolean
  setToken (token: string): void
  setUser (user: U): void
  $subscription (): Observable<AuthState>
}

export enum AuthState {
  BootedWithToken,
  Authorized,
  Unauthorized
}

export const TokenKey = 'token'

export const AuthManagementServiceType = Symbol.for('IAuthManagementService')