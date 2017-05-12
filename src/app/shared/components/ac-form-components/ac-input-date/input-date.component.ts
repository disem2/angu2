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

  @Output()
  public dateChange = new EventEmitter();

  @ViewChild('dateControl') public dateControl: FormControl;

  public ngOnInit() {
    this.dateChangeWatch();
  }

  private dateChangeWatch() {
    this.dateControl.valueChanges.subscribe((newDate) => {
      if (this.dateControl.valid) {
        this.dateChange.emit(new Date(newDate));
      } else {
        this.dateChange.emit(null);
      }
    });
  }
}
