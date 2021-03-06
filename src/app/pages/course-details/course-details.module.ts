﻿  // angular modules
  import { NgModule } from '@angular/core';

  // routes
  import { routes } from './course-details.routes';

  // custom components
  import { CourseDetailsComponent } from './course-details.component';

  @NgModule({
    declarations: [
      CourseDetailsComponent
    ],
    imports: [
      routes
    ],
    exports: [
      CourseDetailsComponent
    ]
  })
  export class CourseDetailsModule {
  }
