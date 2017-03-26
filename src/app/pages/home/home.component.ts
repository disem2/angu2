import { Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy, NgZone } from '@angular/core';
import { CourseService } from '../../shared/services';

@Component({
  selector: 'home',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./home.styles.scss'],
  templateUrl: './home.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  public courses;
  private courseService;
  private _ngZone;

  constructor(courseService: CourseService, _ngZone: NgZone) {
    this.courses = [];

    this.courseService = courseService;
    this._ngZone = _ngZone;
  }

  public ngOnInit() {
    this.courses = this.courseService.getCourses();

    this._ngZone.onUnstable.subscribe(() => {
      console.time('timer');
    });
    this._ngZone.onStable.subscribe(() => {
      console.timeEnd('timer');
    });
  }

  public removeCourse(id) {
    this.courseService.removeCourse(id);
  }

  public updateCourse(id) {
    this.courseService.updateCourse(id, {title: 'asf'});
  }
}
