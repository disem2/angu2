  // angular modules
  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { FormsModule }   from '@angular/forms';
  import { CourseService } from '../../shared/services';

  // routes
  import { routes } from './home.routes';

  // custom components
  import { HomeComponent } from './home.component';
  import { AcToolboxComponent, AcCourseItemComponent } from '../../shared';

  @NgModule({
    declarations: [
      AcToolboxComponent,
      HomeComponent,
      AcCourseItemComponent
    ],
    imports: [
      routes,
      BrowserModule,
      FormsModule
    ]
  })
  export class HomeModule {
  }
