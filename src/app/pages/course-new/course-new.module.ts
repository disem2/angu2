  // angular modules
  import { NgModule } from '@angular/core';

  // routes
  import { routes } from './course-new.routes';

  // custom components
  import { CourseNewComponent } from './course-new.component';
  import { SharedModule } from '../../shared';

  @NgModule({
    declarations: [
      CourseNewComponent
    ],
    imports: [
      routes,
      SharedModule
    ],
    exports: [
      CourseNewComponent
    ]
  })
  export class CourseNewModule {
  }
