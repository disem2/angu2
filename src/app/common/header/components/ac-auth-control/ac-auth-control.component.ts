import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from '../../../../shared/services';
import { Router } from '@angular/router';

@Component({
  selector: 'ac-auth-control',
  encapsulation: ViewEncapsulation.Emulated,
  providers: [],
  styleUrls: ['ac-auth-control.styles.scss'],
  templateUrl: 'ac-auth-control.template.html'
})
export class AcAuthControlComponent {
  private authService;
  private router;

  constructor(
    authService: AuthenticationService,
    router: Router
  ) {
    this.authService = authService;
    this.router = router;
  }

  public login() {
    this.authService.login();
  }

  public logoutUser() {
    this.authService.logout();

    this.router.navigate(['/login']);
  }
}
