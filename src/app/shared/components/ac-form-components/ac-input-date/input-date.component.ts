import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from '@angular/forms';

@Component({
  selector: 'ac-input-date',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./input-date.styles.scss'],
  templateUrl: './input-date.template.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
    }
  ]
})

export class AcInputDateComponent implements OnInit, ControlValueAccessor {
  @Input()
  public date: Date;
  @Input()
  public isDateValid: boolean;

  @Output()
  public dateChange = new EventEmitter();
  @Output()
  public dateValidityChange = new EventEmitter();

  @ViewChild('dateControl') public dateControl: FormControl;

  public ngOnInit() {
    this.dateControl.valueChanges.subscribe(() => {
      this.dateValidityChange.emit(this.dateControl.valid);
    });
  }

  private changeDate() {
    this.dateChange.emit(new Date(this.dateControl.value));
  }
}
