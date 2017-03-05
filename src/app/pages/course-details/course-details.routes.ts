import { Routes, RouterModule } from '@angular/router';
import { CourseDetailsComponent }    from './course-details.component';

// Route Configuration
const courseDetailsRoutes: Routes = [
	{ path: 'courseDetails', component: CourseDetailsComponent },
];

export const routes = RouterModule.forChild(courseDetailsRoutes);
