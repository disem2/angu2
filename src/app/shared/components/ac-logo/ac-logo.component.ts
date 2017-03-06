import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'ac-logo',
  encapsulation: ViewEncapsulation.None,
  providers: [],
  styleUrls: ['./ac-logo.styles.scss'],
  templateUrl: './ac-logo.template.html'
})
export class AcLogoComponent implements OnInit, OnDestroy {
  public ngOnInit() {
  }

  public ngOnDestroy() {
  }
}
