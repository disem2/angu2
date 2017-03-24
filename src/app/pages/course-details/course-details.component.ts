import { Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { CourseService } from '../../shared/services';

@Component({
  selector: 'course-details',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./course-details.styles.scss'],
  templateUrl: './course-details.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseDetailsComponent {
}
