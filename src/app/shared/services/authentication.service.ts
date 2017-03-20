import { Injectable, Inject } from '@angular/core';
import { UserInterface } from '../interfaces';
import { UserClass } from '../classes';
import { LocalStorageService } from 'angular-2-local-storage';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class AuthenticationService {
  public isAuthenticated: boolean;
  private authStateChange: Subject<Boolean> = new Subject<Boolean>();
  private user: UserInterface;
  private localStorage;

  constructor(@Inject(LocalStorageService) localStorage: LocalStorageService) {
    this.localStorage = localStorage;
    this.isAuthenticated = true;
    this.user = new UserClass({
      name: '',
      id: '',
      email: ''
    });
  }

  public login(login: string, password: string) {
    const mockUser = {
      name: 'name',
      id: '1',
      email: 'ddd@dd.dd'
    };

    console.log(login);
    console.log(password);

    this.user.name = mockUser.name;
    this.user.id = mockUser.id;
    this.user.email = mockUser.email;

    this.isAuthenticated = true;

    this.authStateChange.next(this.isAuthenticated);

    this.localStorage.set('user', this.user);
  }

  public logout() {
    this.localStorage.remove('user');

    this.isAuthenticated = false;

    this.authStateChange.next(this.isAuthenticated);
  }
}
