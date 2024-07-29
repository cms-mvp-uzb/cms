import { User } from "../../contracts";
import { ILogin, LoginData } from "./contracts";

export class LoginService implements ILogin {
  public async login(payload: LoginData): Promise<User> {
    return Promise.resolve(payload)
  }
}
