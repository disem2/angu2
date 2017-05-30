import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CourseDetailsComponent } from './pages/course-details/course-details.component';
import { LoginComponent } from './pages/login/login.component';
import { CourseEditComponent } from './pages/course-edit/course-edit.component';
import { CourseNewComponent } from './pages/course-new/course-new.component';
import { NoContentComponent } from './pages/no-content/no-content.component';

import { CanDeactivateAuth, CanActivateAuth } from './shared/routerGuards';

export const ROUTES: Routes = [
  { path: '',  redirectTo: '/courses', pathMatch: 'full', canActivate: [ CanActivateAuth ] },
  { path: 'courses', component: HomeComponent, canActivate: [ CanActivateAuth ] },
  { path: 'courseDetails', component: CourseDetailsComponent, canActivate: [ CanActivateAuth ] },
  { path: 'login', component: LoginComponent, canDeactivate: [ CanDeactivateAuth ] },
  { path: 'courses/:id', component: CourseEditComponent, canActivate: [ CanActivateAuth ] },
  { path: 'courses/new', component: CourseNewComponent, canActivate: [ CanActivateAuth ] },
  { path: '**',    component: NoContentComponent },
];
