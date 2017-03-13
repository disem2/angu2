import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';

import { CourseService } from '../../services';
import { CourseItemClass } from './course-item.class';

@Component({
  selector: 'ac-course-item',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['course-item.styles.scss'],
  template: require('./course-item.template.html')
})
export class AcCourseItemComponent implements OnInit {
  @Input()
  private course: CourseItemClass;
  private formatedDuration;
  // todo Can't path index to component with for

  constructor() {
    this.formatedDuration = '';
  }

  public ngOnInit() {
    this.formatDuration(this.course.duration);
  }

  private formatDuration(duration) {
    const hours = Math.floor(duration / 60);
    const min = duration % 60;

    this.formatedDuration = hours > 0 ? `${hours}h ${min}min` : `${min}min`;
  }
}
