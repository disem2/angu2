// angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AcLogoComponent, AcToolboxComponent, AcCourseItemComponent } from './components'; // todo doesn't work without ac-logo
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AcLogoComponent,
    AcToolboxComponent,
    AcCourseItemComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  exports: [
    AcLogoComponent,
    AcToolboxComponent,
    AcCourseItemComponent
  ]
})
export class SharedModule {
}
