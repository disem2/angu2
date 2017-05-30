import { Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthenticationService } from '../../shared/services';
import {Router} from '@angular/router';

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

  constructor(
    authService: AuthenticationService,
    private router: Router
  ) {
    this.login = '';
    this.password = '';
    this.authService = authService;
  }

  public loginUser() {
    let loginSubscribe = this.authService.login(this.login, this.password)
      .subscribe(
        (user) => {
          this.router.navigate(['/courses']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
