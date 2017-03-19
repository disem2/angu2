import { UserInterface } from '../interfaces';

export class UserClass implements UserInterface {
  public name: string;
  public id: string;
  public email: string;

  constructor(params: UserInterface) {
    this.name = params.name;
    this.id = params.id;
    this.email = params.email;
  }
}
