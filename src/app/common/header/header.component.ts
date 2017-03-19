  import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
  import { AuthenticationService } from '../../shared/services';

  @Component({
    selector: 'ac-header',
    templateUrl: 'header.template.html',
    styleUrls: ['header.styles.scss'],
    encapsulation: ViewEncapsulation.None
  })
  export class HeaderComponent implements OnInit, OnDestroy {
    public isAuthenticated;
    private authService;
    private authSubscription;

    constructor(authService: AuthenticationService) {
      this.authService = authService;
      this.isAuthenticated = this.authService.isAuthenticated;
    }

    public ngOnInit() {
      this.authSubscription = this.authService.authStateChange.subscribe((value: Boolean) => {
        this.isAuthenticated = value;
      });
    }

    public ngOnDestroy() {
      this.authSubscription.unsubscribe();
    }
  }
