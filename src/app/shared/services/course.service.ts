import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CourseItemClass } from '../components/course-item/course-item.class';
import { CourseInterface } from '../interfaces';
import { APIService } from './api.service';

@Injectable()
export class CourseService {
  public courses;
  public coursesObserver;
  public courseObserver;
  private apiService;

  constructor(@Inject(APIService) apiService: APIService) {
    this.apiService = apiService;
    this.courses = [];
  }

  public getCourses(startIndex, quantity, filter) {
    this.coursesObserver = this.apiService.getCourses(startIndex, quantity, filter)
        .map( (response) => response.json())
        .map( (courses) => this.prepareCourses(courses));
  }

  public getCourseById(id: string) {
    this.courseObserver = this.apiService.getCourseById(id)
        .map( (response) => response.json())
        .map( (course) => this.prepareCourse(course));
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

  public resetCourses() {
    this.courses = [];
  }

  public prepareCourse(course): CourseInterface {
    const paramsObject = {
      title: course.name,
      id: course.id,
      duration: course.length,
      topRated: course.isTopRated,
      date: course.date,
      description: course.description
    };

    return new CourseItemClass(paramsObject);
  }

  private prepareCourses(coursesResponse): CourseInterface[] {
    for (let course of coursesResponse.courses) {
      const courseItem = this.prepareCourse(course);

      this.courses.push(courseItem);
    }

    coursesResponse.courses = this.courses.slice(0, this.courses.length);

    return coursesResponse;
  }
}
