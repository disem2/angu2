import
{ Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy, NgZone, ChangeDetectorRef }
from '@angular/core';
import { CourseService, LoaderService } from '../../shared/services';

@Component({
  selector: 'home',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./home.styles.scss'],
  templateUrl: './home.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  public courses;
  public isBusy;

  constructor(private courseService: CourseService,
              private loaderService: LoaderService,
              private ref: ChangeDetectorRef,
              private _ngZone: NgZone) {
    this.courses = [];
    this.isBusy = true;
  }

  public ngOnInit() {
    this.loaderService.show();
    this.isBusy = true;

    this.courseService.getCourses().then((result) => {
      this.ref.markForCheck();
      this.courses = result;
      this.isBusy = false;

      this.loaderService.hide();
    });

    // this._ngZone.onUnstable.subscribe(() => {
    //   console.time('timer');
    // });
    // this._ngZone.onStable.subscribe(() => {
    //   console.timeEnd('timer');
    // });
  }

  public removeCourse(id) {
    this.courseService.removeCourse(id);
  }

  public updateCourse(id) {
    this.courseService.updateCourse(id, {title: 'asf'});
  }
}
