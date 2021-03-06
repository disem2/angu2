import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs/Rx';

import { CourseItemClass } from '../components/course-item/course-item.class';
import { CourseInterface } from '../interfaces';
import { APIService } from './api.service';

@Injectable()
export class CourseService {
  private static prepareAuthors(authors) {
    return authors.map((author) => {
      author.checked = true;
      return author;
    });
  }

  public courses;
  public coursesObserver;
  public courseObserver;
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

  public setCurrentCourse(course) {
    this.currentCourse = course;

    console.log(course);

    this.currentCourseChange.next(course);
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
      date: new Date(course.date),
      description: course.description,
      authors: CourseService.prepareAuthors(course.authors)
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
