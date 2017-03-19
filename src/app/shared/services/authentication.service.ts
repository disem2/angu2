import { Injectable, Inject } from '@angular/core';
import { UserInterface } from '../interfaces';
import { UserClass } from '../classes';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class AuthenticationService {
  public isAuthenticated: boolean;
  private user: UserInterface;
  private localStorage;

  constructor(@Inject(LocalStorageService) localStorage: LocalStorageService) {
    this.localStorage = localStorage;
    this.isAuthenticated = false;
    this.user = new UserClass({
      name: '',
      id: '',
      email: ''
    });
  }

  public login() {
    this.user.name = 'name';
    this.user.id = '1';
    this.user.email = 'ddd@dd.dd';

    this.isAuthenticated = true;

    console.log(this.localStorage);
  }
}
