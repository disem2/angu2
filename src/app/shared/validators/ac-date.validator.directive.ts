import { Directive, OnChanges } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';
import { validateDate } from './validateFunctions/ac.validateDate';

@Directive({
  selector: '[dateValidator][ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: DateValidatorDirective, multi: true}]
})

export class DateValidatorDirective implements Validator, OnChanges {
  public validate(control: FormControl) {
    return validateDate(control);
  }
}
