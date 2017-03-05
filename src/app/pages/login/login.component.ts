import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  providers: [],
  styles: [require('./login.styles.scss')],
  template: require('./login.template.html')
})
export class LoginComponent implements OnInit, OnDestroy {
  public ngOnInit() {
  }

  public ngOnDestroy() {
  }
}

