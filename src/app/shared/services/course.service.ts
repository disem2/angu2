import { Injectable, Inject } from '@angular/core';

import { CourseItemClass } from '../components/course-item/course-item.class';
import { CourseInterface } from '../../shared/interfaces/course.interface';
import { APIService } from '../../shared/services';

const coursesMockData = [
  {
    title: 'Course 1',
    id: '1',
    duration: 50,
    addingDate: new Date(2017, 3, 1),
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
          the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley`
  },
  {
    title: 'Course 2',
    id: '2',
    duration: 500,
    addingDate: new Date(2016, 3, 1),
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
          the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley`
  },
  {
    title: 'Course 3',
    id: '3',
    duration: 10,
    addingDate: new Date(2018, 3, 1),
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
          the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley`
  },
];

@Injectable()
export class CourseService {
  private static getPreparedCourses(data: CourseInterface[]) {
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

    return courses;
  }

  private courses;
  private apiService;

  constructor(@Inject(APIService) apiService: APIService) {
    this.apiService = apiService;
    this.courses = CourseService.getPreparedCourses(coursesMockData);
  }

  public getCourses() {
    let isSuccessResponse = Math.floor((Math.random() * 10)) % 2;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = isSuccessResponse ? this.courses : [];

        resolve(result);
      }, 500);
    });
  }

  public getCourseById(id: string): CourseInterface {
    for (const course of this.courses) {
      if (course.id === id) {
        return course;
      }
    }
  }

  public createCourse(course: CourseInterface) {
    const courseItem = {
      title: course.title,
      id: course.id,
      duration: course.duration,
      addingDate: course.addingDate,
      description: course.description
    };

    this.courses.push(courseItem);
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
}
