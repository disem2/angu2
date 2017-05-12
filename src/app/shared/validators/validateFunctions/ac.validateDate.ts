import { FormControl } from '@angular/forms';

export function validateDate(c: FormControl) {

  let DATE_REGEXP = /^(0?[1-9]|1[012])[\/](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;

  return DATE_REGEXP.test(c.value) ? null : { invalidDate: true };
}
