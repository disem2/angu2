import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

import { CourseService } from '../../shared/services';

@Component({
  selector: 'course-details',
  encapsulation: ViewEncapsulation.None,
  providers: [],
  styles: [require('./course-details.styles.scss')],
  template: require('./course-details.template.html')
})
export class CourseDetailsComponent implements OnInit, OnDestroy {
  public ngOnInit() {
  }

  public ngOnDestroy() {
  }
}

