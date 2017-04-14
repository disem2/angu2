  // angular modules
  import { NgModule } from '@angular/core';

  // routes
  import { routes } from './course-edit.routes';

  // custom components
  import { CourseEditComponent } from './course-edit.component';
  import { SharedModule } from '../../shared';

  @NgModule({
    declarations: [
      CourseEditComponent
    ],
    imports: [
      routes,
      SharedModule
    ],
    exports: [
      CourseEditComponent
    ]
  })
  export class CourseEditModule {
  }
