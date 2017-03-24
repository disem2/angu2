  import { Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy } from '@angular/core';

  @Component({
    selector: 'ac-footer',
    templateUrl: 'footer.template.html',
    styleUrls: ['footer.styles.scss'],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class FooterComponent {
  }
