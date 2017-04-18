  import {
  Component, ViewEncapsulation, OnInit, OnDestroy, ChangeDetectionStrategy,
    ChangeDetectorRef
} from '@angular/core';
  import { AuthenticationService } from '../../shared/services';

  @Component({
    selector: 'ac-header',
    templateUrl: 'header.template.html',
    styleUrls: ['header.styles.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class HeaderComponent implements OnInit, OnDestroy {
    public isAuthenticated;
    private authSubscription;

    constructor(private authService: AuthenticationService,
                private ref: ChangeDetectorRef) {
      this.isAuthenticated = this.authService.isAuthenticated;
    }

    public ngOnInit() {
      this.authSubscription = this.authService.authStateChange.subscribe((value: Boolean) => {
        this.ref.markForCheck();
        this.isAuthenticated = value;
      });
    }

    public ngOnDestroy() {
      this.authSubscription.unsubscribe();
    }
  }
