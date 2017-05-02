import { Injectable, Inject } from '@angular/core';
import { UserInterface } from '../interfaces';
import { UserClass } from '../classes';
import { LocalStorageService } from 'angular-2-local-storage';
import { APIService } from './api.service';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class AuthenticationService {
  private static prepareUser(user) {
    return {
      name: user.name,
      token: user.fakeToken
    };
  }
  public isAuthenticated: boolean;
  public authStateChange: Subject<Boolean> = new Subject<Boolean>();
  public user: UserInterface;
  public userChange: Subject<Object> = new Subject<Object>();
  private localStorage;
  private apiService;

  constructor(
    @Inject(LocalStorageService) localStorage: LocalStorageService,
    @Inject(APIService) apiService: APIService
  ) {
    this.localStorage = localStorage;
    this.apiService = apiService;

    this.user = this.localStorage.get('user');

    this.isAuthenticated = !!this.user;
  }

  public login(login: string, password: string) {
    const loginParam = {
      login,
      password
    };

    return this.apiService.login(loginParam)
      .map( (response) => response.json())
      .map( (response) => {
        this.localStorage.set('token', response.token);

        return this.getUserInfo(response.token);
      })
      .mergeAll();
  }

  public getUserInfo(token) {
    this.localStorage.set('token', token);
    return this.apiService.getUserInfo(token)
      .map( (response) => response.json())
      .map( (user) => {
        this.user = new UserClass({
          name: user.name.first + ' ' + user.name.last,
          login: user.login,
          id: user.id
        });

        this.userChange.next(this.user);

        this.localStorage.set('user', this.user);

        this.isAuthenticated = true;

        this.authStateChange.next(this.isAuthenticated);

        return this.user;
      });
  }

  public logout() {
    this.localStorage.remove('user');

    this.isAuthenticated = false;

    this.authStateChange.next(this.isAuthenticated);
  }
}
