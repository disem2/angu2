import { Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AuthenticationService } from '../../../../shared/services';
import { Router } from '@angular/router';

@Component({
  selector: 'ac-auth-control',
  encapsulation: ViewEncapsulation.Emulated,
  providers: [],
  styleUrls: ['ac-auth-control.styles.scss'],
  templateUrl: 'ac-auth-control.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcAuthControlComponent implements OnInit {
  public user: Object;
  private authService;
  private router;
  private userSubscription;

  constructor(
    authService: AuthenticationService,
    router: Router,
    private ref: ChangeDetectorRef) {
    this.authService = authService;
    this.router = router;
    this.user = this.authService.user;
  }

  public ngOnInit() {
    this.userSubscription = this.authService.userChange.subscribe((value: Object) => {
      this.ref.markForCheck();
      this.user = value;
    });
  }

  public login() {
    this.authService.login();
  }

  public logoutUser() {
    this.authService.logout();

    this.router.navigate(['/login']);
  }
}
