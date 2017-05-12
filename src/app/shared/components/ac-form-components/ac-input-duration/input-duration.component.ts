import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ac-input-duration',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./input-duration.styles.scss'],
  templateUrl: './input-duration.template.html'
})
export class AcInputDurationComponent {
  @Input()
  public duration: number;

  @Output()
  public durationChange = new EventEmitter();

  public mask;

  constructor() {
    this.duration = 5;
    this.mask = [/\d/, /\d?$/, /\d?$/];
  }

  public setDuration(duration) {
    const durationNumber = +duration.substring(0, duration.indexOf('_'));

    this.durationChange.emit(durationNumber);
  }
}
