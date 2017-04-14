import { Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { CourseService } from '../../shared/services';

@Component({
  selector: 'course-edit',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./course-edit.styles.scss'],
  templateUrl: './course-edit.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseEditComponent {
  public save() {
    console.log('save');
  }

  public cancel() {
    console.log('cancel');
  }
}
