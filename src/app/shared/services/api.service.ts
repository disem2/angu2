import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

const HOST = 'http://localhost:3004';

@Injectable()
export class APIService {
  private coursesUrl = HOST + '/courses';
  private loginUrl = HOST + '/auth/login';
  private userInfoUrl = HOST + '/auth/userinfo';

  constructor(
    private http: Http
  ) {}

  public updateCourse(id: string, courseData: Object) {
    console.log(id);
  }

  public getCourses() {
    return this.http.get(this.coursesUrl);
  }

  public login(params) {
    return this.http.post(this.loginUrl, params);
  }

  public getUserInfo(token) {
    const headers = new Headers();
    headers.append('Authorization', token);

    return this.http.post(this.userInfoUrl, null, {
      headers
    });
  }
}
