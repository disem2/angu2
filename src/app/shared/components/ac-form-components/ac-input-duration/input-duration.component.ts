import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'ac-input-duration',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./input-duration.styles.scss'],
  templateUrl: './input-duration.template.html'
})
export class AcInputDurationComponent {
  public duration: number;

  constructor() {
    this.duration = 5;
  };
}
