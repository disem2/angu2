import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

import { CourseService } from '../../services';

@Component({
  selector: 'course-item',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['course-item.styles.scss'],
  template: require('./course-item.template.html')
})
export class CourseItemComponent implements OnInit, OnDestroy {
  public courses;

  constructor() {
    this.courses = [];
  }

  public ngOnInit() {
    const coursesMockData = [
      {
        title: 'Course 1',
        id: 'c_1',
        duration: 50,
        addingDate: new Date(),
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
      {
        title: 'Course 2',
        id: 'c_2',
        duration: 500,
        addingDate: new Date(),
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
      {
        title: 'Course 3',
        id: 'c_3',
        duration: 10,
        addingDate: new Date(),
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
    ];

    this.courses = CourseService.getParsedCourses(coursesMockData);

    console.log(this.courses);
  }

  public ngOnDestroy() {
  }
}
