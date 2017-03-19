import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from '../../shared/services';

@Component({
  selector: 'ac-login',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./login.styles.scss'],
  templateUrl: './login.template.html'
})

export class LoginComponent {
  public login;
  public password;
  private authService;

  constructor(authService: AuthenticationService) {
    this.login = '';
    this.password = '';
    this.authService = authService;
  }

  public loginUser() {
    this.authService.login(this.login, this.password);
  }
}
