import { Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ac-logo',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./ac-logo.styles.scss'],
  templateUrl: './ac-logo.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcLogoComponent {
}
