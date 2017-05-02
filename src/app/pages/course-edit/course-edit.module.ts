  // angular modules
  import { NgModule } from '@angular/core';
  import { FormsModule } from '@angular/forms';

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
      SharedModule,
      FormsModule
    ],
    exports: [
      CourseEditComponent
    ]
  })
  export class CourseEditModule {
  }
