import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {
  public isAuthenticated: boolean;
  private user;

  constructor() {
    this.isAuthenticated = false;
  }


}
