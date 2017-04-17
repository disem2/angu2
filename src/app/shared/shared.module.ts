import 'bootstrap/dist/css/bootstrap.css';
// angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as components from './components';
import * as directives from './directives';
import { PipesModule } from './pipes';
import { FormsModule } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  declarations: [
    ...arrayFromObject(components),
    ...arrayFromObject(directives)
  ],
  imports: [
    FormsModule,
    BrowserModule,
    PipesModule,
    HttpModule,
    JsonpModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    })
  ],
  exports: [
    PipesModule,
    ...arrayFromObject(components)
  ]
})
export class SharedModule {
}

function arrayFromObject(obj) {
  return Object.keys(obj).map((key) => obj[key]);
}
