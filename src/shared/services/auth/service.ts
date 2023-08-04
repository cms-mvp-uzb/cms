import { injectable } from 'inversify'
import { BehaviorSubject, Observable } from 'rxjs'

import { AuthState, IAuthManagementService, TokenKey } from './contracts'

@injectable()
export class AuthManagementService<User extends unknown = unknown> implements IAuthManagementService<User> {
  protected tokenObj: BehaviorSubject<AuthState>
  protected tokenObservable: Observable<AuthState>
  protected user: User | null = null

  constructor () {
    const initialState = localStorage.getItem(TokenKey)
      ? AuthState.BootedWithToken
      : AuthState.Unauthorized

    this.tokenObj = new BehaviorSubject<AuthState>(initialState)
    this.tokenObservable = this.tokenObj.asObservable()
  }

  public deleteToken (): void {
    localStorage.removeItem(TokenKey)
    this.tokenObj.next(AuthState.Unauthorized)
  }

  /**
   * Get the token as an Observable to subscribe to token changes.
   */
  public $subscription (): Observable<AuthState> {
    return this.tokenObservable
  }

  public setToken (token: string): void {
    localStorage.setItem(TokenKey, token)
    this.tokenObj.next(AuthState.BootedWithToken)
  }

  public setUser (user: User): void {
    this.user = user
  }

  public exists (): boolean {
    return this.user !== null
  }
}