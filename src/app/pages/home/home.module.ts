  // angular modules
  import { NgModule } from '@angular/core';
  import { CourseService } from '../../shared/services';

  // routes
  import { routes } from './home.routes';

  // custom components
  import { HomeComponent } from './home.component';
  import { CourseItemComponent } from '../../shared/components/course-item/course-item.component';

  @NgModule({
    declarations: [
      HomeComponent,
      CourseItemComponent
    ],
    imports: [
      routes
    ]
  })
  export class HomeModule {
  }
