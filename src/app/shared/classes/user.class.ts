import { UserInterface } from '../interfaces';

export class UserClass implements UserInterface {
  public name: string;
  public id: string;
  public login: string;

  constructor(params: UserInterface) {
    this.name = params.name;
    this.id = params.id;
    this.login = params.login;
  }
}
