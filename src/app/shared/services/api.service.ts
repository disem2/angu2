import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const HOST = 'http://localhost:3004';

@Injectable()
export class APIService {
  private coursesUrl = HOST + '/courses';

  constructor(private http: Http) {}

  public updateCourse(id: string, courseData: Object) {
    console.log(id);
  }

  public getCourses() {
    return this.http.get(this.coursesUrl);
  }
}
