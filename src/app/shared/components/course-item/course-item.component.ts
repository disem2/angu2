import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

import { CourseService } from '../../services';

@Component({
  selector: 'ac-course-item',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['course-item.styles.scss'],
  template: require('./course-item.template.html')
})
export class AcCourseItemComponent {
}
