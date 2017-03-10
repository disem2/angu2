import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

import { CourseService } from '../../shared/services';

@Component({
  selector: 'home',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./home.styles.scss'],
  templateUrl: './home.template.html'
})
export class HomeComponent implements OnInit {
  public courses;
  private courseService;

  constructor(courseService: CourseService) {
    this.courses = [];

    this.courseService = courseService;
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

    this.courses = this.courseService.prepareCourses(coursesMockData);
  }
}
