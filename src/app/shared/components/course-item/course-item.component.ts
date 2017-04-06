import { Component, ViewEncapsulation, Input, Output,
          OnInit, EventEmitter, ChangeDetectionStrategy  } from '@angular/core';

import { CourseService } from '../../services';
import { CourseItemClass } from './course-item.class';

@Component({
  selector: 'ac-course-item',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['course-item.styles.scss'],
  template: require('./course-item.template.html'),
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcCourseItemComponent {
  @Output()
  public removeCourse = new EventEmitter();
  @Output()
  public updateCourse = new EventEmitter();

  @Input()
  private course: CourseItemClass;
  private formattedDuration;
  // todo Can't path index to component with for

  constructor() {
    this.formattedDuration = '';
  }

  public rmCourse(ev) {
    this.removeCourse.emit(this.course.id);
  }

  public editCourse(ev) {
    this.updateCourse.emit(this.course.id);
  }
}
