import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'ac-logo',
  encapsulation: ViewEncapsulation.None,
  providers: [],
  styles: [require('./ac-logo.styles.scss')],
  template: require('./ac-logo.template.html')
})
export class AcLogoComponent implements OnInit, OnDestroy {
  public ngOnInit() {
  }

  public ngOnDestroy() {
  }
}

