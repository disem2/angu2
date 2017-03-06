import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'ac-breadcrumbs',
  encapsulation: ViewEncapsulation.None,
  providers: [],
  styleUrls: ['./ac-breadcrumbs.styles.scss'],
  templateUrl: './ac-breadcrumbs.template.html'
})
export class AcBreadcrumbsComponent implements OnInit, OnDestroy {
  public ngOnInit() {
  }

  public ngOnDestroy() {
  }
}
