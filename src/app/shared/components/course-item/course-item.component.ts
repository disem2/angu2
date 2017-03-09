import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

import { CourseService } from '../../services';

@Component({
  selector: 'course-item',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['course-item.styles.scss'],
  template: require('./course-item.template.html')
})
export class CourseItemComponent implements OnInit, OnDestroy {
  public ngOnInit() {
  }

  public ngOnDestroy() {
  }
}
