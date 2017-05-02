import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CourseDetailsComponent } from './pages/course-details/course-details.component';
import { LoginComponent } from './pages/login/login.component';
import { CourseEditComponent } from './pages/course-edit/course-edit.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'courseDetails', component: CourseDetailsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'edit/:id', component: CourseEditComponent}
];
