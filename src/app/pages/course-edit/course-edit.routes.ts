import { Routes, RouterModule } from '@angular/router';
import { CourseEditComponent }    from './course-edit.component';

// Route Configuration
const courseEditRoutes: Routes = [
	{ path: 'courseEdit', component: CourseEditComponent },
];

export const routes = RouterModule.forChild(courseEditRoutes);
