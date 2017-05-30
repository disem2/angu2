import { Routes, RouterModule } from '@angular/router';
import { CourseNewComponent }    from './course-new.component';

// Route Configuration
const courseNewRoutes: Routes = [
	{ path: 'course/new', component: CourseNewComponent },
];

export const routes = RouterModule.forChild(courseNewRoutes);
