import { Injectable } from '@angular/core';

import { CourseItemClass } from '../components/course-item/course-item.class';
import { CourseInterface } from '../../shared/interfaces/course.interface';


@Injectable()
export class CourseService {
  private courses;

  constructor() {
    this.courses = [];
  }

  public prepareCourses(data: CourseInterface[]) {
    const courses = [];

    for (let course of data) {
      const paramsObject = {
        title: course.title,
        id: course.id,
        duration: course.duration,
        addingDate: course.addingDate,
        description: course.description
      };

      const courseItem = new CourseItemClass(paramsObject);

      courses.push(courseItem);
    }

    this.courses = courses;

    return courses;
  }

  public getCourses() {
    return this.courses;
  }
}
