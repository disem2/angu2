import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home';
import { CourseDetailsComponent } from './pages/course-details';
import { LoginComponent } from './pages/login';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'courseDetails', component: CourseDetailsComponent},
  { path: 'LoginComponent', component: LoginComponent}
];
