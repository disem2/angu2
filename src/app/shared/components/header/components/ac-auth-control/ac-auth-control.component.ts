import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'ac-auth-control',
  encapsulation: ViewEncapsulation.None,
  providers: [],
  styles: [require('./ac-auth-control.styles.scss')],
  template: require('./ac-auth-control.template.html')
})
export class AcAuthControlComponent implements OnInit, OnDestroy {
  public ngOnInit() {
  }

  public ngOnDestroy() {
  }
}

