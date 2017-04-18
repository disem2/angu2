import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CourseItemClass } from '../components/course-item/course-item.class';
import { CourseInterface } from '../../shared/interfaces/course.interface';
import { APIService } from '../../shared/services';

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
  private static prepareCourses(coursesData): CourseInterface[] {
    const courses = [];

    for (let course of coursesData) {
      const paramsObject = {
        title: course.name,
        id: course.id,
        duration: course.length,
        topRated: course.isTopRated,
        date: course.date,
        description: course.description
      };

      const courseItem = new CourseItemClass(paramsObject);

      courses.push(courseItem);
    }

    return courses;
  }
  public courses;
  private apiService;

  constructor(@Inject(APIService) apiService: APIService) {
    this.apiService = apiService;
    this.courses = [];
  }

  public setCourses() {
    this.courses = this.apiService.getCourses()
      .map(response => response.json())
      .map(courses => CourseService.prepareCourses(courses));
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
      date: course.date,
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
