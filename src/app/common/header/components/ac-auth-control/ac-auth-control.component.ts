import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from '../../../../shared/services';

@Component({
  selector: 'ac-auth-control',
  encapsulation: ViewEncapsulation.Emulated,
  providers: [],
  styleUrls: ['ac-auth-control.styles.scss'],
  templateUrl: 'ac-auth-control.template.html'
})
export class AcAuthControlComponent {
  private authService;

  constructor(authService: AuthenticationService) {
    this.authService = authService;
  }

  public login() {
    this.authService.login();
  }
}
