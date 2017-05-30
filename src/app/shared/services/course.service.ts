import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs/Rx';

import { CourseItemClass } from '../components/course-item/course-item.class';
import { CourseInterface } from '../interfaces';
import { APIService } from './api.service';

const coursesMockData = [
  {
    title: 'Mega course',
    id: '1',
    duration: 50,
    date: new Date(2017, 3, 1),
    topRated: true,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
          the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley`
  },
  {
    title: 'Another one',
    id: '2',
    duration: 500,
    date: new Date(2016, 3, 1),
    topRated: false,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
          the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley`
  },
  {
    title: 'Next Course',
    id: '3',
    duration: 10,
    date: new Date(2018, 3, 1),
    topRated: false,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
          the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley`
  },
];

@Injectable()
export class CourseService {
  private prepareCourses(coursesResponse): CourseInterface[] {
    for (let course of coursesResponse.courses) {
      const paramsObject = {
        title: course.name,
        id: course.id,
        duration: course.length,
        topRated: course.isTopRated,
        date: course.date,
        description: course.description
      };

      const courseItem = new CourseItemClass(paramsObject);

      this.courses.push(courseItem);
    }

    coursesResponse.courses = this.courses.slice(0, this.courses.length);

    return coursesResponse;
  }
  public courses;
  public coursesObserver;
  public currentCourse: Object;
  public currentCourseChange: Subject<Object> = new Subject<Object>();
  private apiService;

  constructor(@Inject(APIService) apiService: APIService) {
    this.apiService = apiService;
    this.courses = [];
    this.currentCourse = null;
  }

  public getCourses(startIndex, quantity, filter) {
    this.coursesObserver = this.apiService.getCourses(startIndex, quantity, filter)
      .map(response => response.json())
      .map(response => this.prepareCourses(response));
  }

  public getCourseById(id: string): CourseInterface {
    for (const course of this.courses) {
      if (course.id === id) {
        return course;
      }
    }
  }

  public updateCourse(id: string, newCourseData) {
    return this.apiService.updateCourse(id, newCourseData);
  }

  public removeCourse(id: string) {
    for (let i = 0; i < this.courses.length; i++) {
      if (this.courses[i].id === id) {
        this.courses.splice(i, 1);
        break;
      }
    }
  }

  public setCurrentCourse(course) {
    this.currentCourse = course;

    console.log(course);

    this.currentCourseChange.next(course);
  }

  public resetCourses() {
    this.courses = [];
  }
}
