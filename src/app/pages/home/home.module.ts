  // angular modules
  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { FormsModule }   from '@angular/forms';
  import { CourseService } from '../../shared/services';

  // routes
  import { routes } from './home.routes';

  // custom components
  import { HomeComponent } from './home.component';
  import { SharedModule } from '../../shared';

  @NgModule({
    declarations: [
      HomeComponent
    ],
    imports: [
      routes,
      BrowserModule,
      FormsModule,
      SharedModule
    ]
  })
  export class HomeModule {
  }
