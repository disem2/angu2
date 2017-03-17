import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { CourseService } from '../../shared/services';

@Component({
  selector: 'home',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./home.styles.scss'],
  templateUrl: './home.template.html'
})
export class HomeComponent implements OnInit {
  public courses;
  private courseService;

  constructor(courseService: CourseService) {
    this.courses = [];

    this.courseService = courseService;
  }

  public ngOnInit() {
    this.courses = this.courseService.getCourses();
  }

  public removeCourse(id) {
    this.courseService.removeCourse(id);
  }

  public updateCourse(id) {
    this.courseService.updateCourse(id, {title: 'asf'});
  }
}
