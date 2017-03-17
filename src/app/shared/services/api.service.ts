import { Injectable } from '@angular/core';

@Injectable()
export class APIService {
  public updateCourse(id: string, courseData: Object) {
    console.log(id);
  }
}
