import { Injectable } from '@angular/core';

import { CourseItemClass } from '../components/course-item/course-item.class';

@Injectable()
export class CourseService {
  public static getParsedCourses(data) {
    const courses = [];

    for (let [key, course] of data) {
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

    return courses;
  }
}
