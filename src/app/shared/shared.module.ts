import 'bootstrap/dist/css/bootstrap.css';
// angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as components from './components';
import * as directives from './directives';
import { FormsModule } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

@NgModule({
  declarations: [
    ...arrayFromObject(components),
    ...arrayFromObject(directives)
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    })
  ],
  exports: [
    ...arrayFromObject(components)
  ]
})
export class SharedModule {
}

function arrayFromObject(obj) {
  return Object.keys(obj).map((key) => obj[key]);
}
