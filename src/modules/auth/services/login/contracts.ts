import { User } from '../../contracts'

export interface LoginData {
  username: string
  password: string
}

export interface ILogin {
  login(payload: LoginData): Promise<User>
}
