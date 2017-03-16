// angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as components from './components';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ...arrayFromObject(components)
  ],
  imports: [
    FormsModule,
    BrowserModule
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
