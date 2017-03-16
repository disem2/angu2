import { Injectable } from '@angular/core';

import { CourseItemClass } from '../components/course-item/course-item.class';
import { CourseInterface } from '../../shared/interfaces/course.interface';

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

  constructor() {
    this.courses = CourseService.getPreparedCourses(coursesMockData);
  }

  public getCourses() {
    return this.courses;
  }

  public getCourseById(id: string): CourseInterface {
    for(const course of this.courses) {
      if (course.id === id) {
        return course;
      }
    }
  }

  public createCourse(data: CourseInterface) {
    const course = {
      title: data.title,
      id: data.id,
      duration: data.duration,
      addingDate: data.addingDate,
      description: data.description
    };

    this.courses.push(course);
  }

  public updateCourse(id: string, newData: CourseInterface) {
    for(let i = 0; i < this.courses.length; i++) {
      if (this.courses[i].id === id) {
        this.courses[i] = newData;
      }
    }
  }

  public removeCourse(id: string) {
    for(let i = 0; i < this.courses.length; i++) {
      if (this.courses[i].id === id) {
        this.courses.splice(i, 1);
      }
    }
  }
}
