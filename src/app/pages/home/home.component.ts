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
  public isError;
  private static cloneData(data) {
    return JSON.parse(JSON.stringify(data));
  }

  public courses;
  public isBusy;
  private allCourses;

  constructor(private courseService: CourseService,
              private loaderService: LoaderService,
              private ref: ChangeDetectorRef,
              private _ngZone: NgZone) {
    this.courses = [];
    this.allCourses = [];
    this.isBusy = true;
    this.isError = false;
  }

  public ngOnInit() {
    this.loaderService.show();
    this.isBusy = true;

    this.makeSubscriptions();

    // this._ngZone.onUnstable.subscribe(() => {
    //   console.time('timer');
    // });
    // this._ngZone.onStable.subscribe(() => {
    //   console.timeEnd('timer');
    // });
  }

  public makeSubscriptions() {
    let coursesSubscription = this.courseService.courses.subscribe(
      courses => {
        this.ref.markForCheck();
        this.allCourses = courses;
        this.courses = HomeComponent.cloneData(courses);
        this.isBusy = false;

        this.loaderService.hide();
      },
      error => {
        this.isError = true;

      },
      () => {
        this.isBusy = false;
      }
    );
  }

  public removeCourse(id) {
    this.courseService.removeCourse(id);
  }

  public updateCourse(id) {
    this.courseService.updateCourse(id, {title: 'asf'});
  }

  public filterCourses(filterValue, fieldName) {
    if (this.allCourses.length > 0) {
      this.courses = this.allCourses.filter((course) => {
        return course[fieldName].toUpperCase().indexOf(filterValue.toUpperCase()) > -1;
      });
    }
  }
}
