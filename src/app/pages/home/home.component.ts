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
        id: '1',
        duration: 50,
        addingDate: new Date(),
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
          the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley`
      },
      {
        title: 'Course 2',
        id: '2',
        duration: 500,
        addingDate: new Date(),
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
          the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley`
      },
      {
        title: 'Course 3',
        id: '3',
        duration: 10,
        addingDate: new Date(),
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
          the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley`
      },
    ];

    this.courses = this.courseService.prepareCourses(coursesMockData);
  }
}
