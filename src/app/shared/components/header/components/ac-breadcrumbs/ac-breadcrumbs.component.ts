import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'ac-breadcrumbs',
  encapsulation: ViewEncapsulation.None,
  providers: [],
  styles: [require('./ac-breadcrumbs.styles.scss')],
  template: require('./ac-breadcrumbs.template.html')
})
export class AcBreadcrumbsComponent implements OnInit, OnDestroy {
  public ngOnInit() {
  }

  public ngOnDestroy() {
  }
}

