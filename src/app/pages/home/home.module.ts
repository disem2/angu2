  // angular modules
  import { NgModule } from '@angular/core';

  // routes
  import { routes } from './home.routes';

  // custom components
  import { HomeComponent } from './home.component';
  import { CourseItemComponent } from './components/course-item/course-item.component';

  @NgModule({
    declarations: [
      HomeComponent,
      CourseItemComponent
    ],
    imports: [
      routes
    ],
    providers: []
  })
  export class HomeModule {
  }
