import { Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthenticationService } from '../../shared/services';

@Component({
  selector: 'ac-login',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./login.styles.scss'],
  templateUrl: './login.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
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
    let loginSubscribe = this.authService.login(this.login, this.password)
      .subscribe(
        (user) => {
          console.log(user);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
