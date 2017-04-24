import
{ Component, ViewEncapsulation, OnInit, OnDestroy, ChangeDetectionStrategy, NgZone, ChangeDetectorRef }
from '@angular/core';
import { CourseService, LoaderService } from '../../shared/services';
import { CourseItemClass } from '../../shared/components/course-item/course-item.class';
import {isError} from "util";

const QUANTITY_FOR_REQUEST = 5;

@Component({
  selector: 'home',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./home.styles.scss'],
  templateUrl: './home.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {
  private static cloneData(data) {
    return JSON.parse(JSON.stringify(data));
  }

  private static filterOutOldCourses(courses: CourseItemClass[]): CourseItemClass[] {
    const dateNow = new Date();
    const timeNow = dateNow.getTime();
    const freshTime = timeNow - 14 * 24 * 3600 * 1000; // now - 14 days

    return courses.filter((course) => {
      return new Date(course.date).getTime() > freshTime;
    });
  }

  private getCourses(startIndex, quantity) {
    this.startCourseIndex += quantity;
    this.courseService.getCourses(startIndex, quantity);
    this.makeCoursesSubscriptions();
  }

  public isError;
  public courses;
  public isBusy;
  private allCoursesQuantity;
  public isAllCoursesShown;
  private coursesSubscription;
  private allCourses;
  private startCourseIndex;
  private getCourses;

  constructor(private courseService: CourseService,
              private loaderService: LoaderService,
              private ref: ChangeDetectorRef,
              private _ngZone: NgZone) {
    this.courses = [];
    this.allCourses = [];
    this.isBusy = true;
    this.isError = false;
    this.isAllCoursesShown = true;
    this.startCourseIndex = 0;
    this.allCoursesQuantity = 0;
  }

  public ngOnInit() {
    this.loaderService.show();
    this.isBusy = true;

    this.getCourses(this.startCourseIndex, QUANTITY_FOR_REQUEST);

    // this._ngZone.onUnstable.subscribe(() => {
    //   console.time('timer');
    // });
    // this._ngZone.onStable.subscribe(() => {
    //   console.timeEnd('timer');
    // });
  }

  public ngOnDestroy() {
    this.coursesSubscription.unsubscribe();
  }

  public makeCoursesSubscriptions() {
    this.coursesSubscription = this.courseService.coursesObserver
      .subscribe(
      (response) => {
        this.ref.markForCheck();

        // Turned off for now
        // this.allCourses = HomeComponent.filterOutOldCourses(response.courses);
        this.allCourses = HomeComponent.cloneData(response.courses);
        this.courses = HomeComponent.cloneData(this.allCourses);
        this.allCoursesQuantity = response.allCoursesLength;
        this.isBusy = false;

        this.setCoursesShownStates();

        this.loaderService.hide();

        this.coursesSubscription.unsubscribe();
      },
      (error) => {
        this.isError = true;

      },
      () => {
        this.isBusy = false;
      }
    );
  }

  public showMore() {
    this.getCourses(this.startCourseIndex, QUANTITY_FOR_REQUEST);
  }

  public setCoursesShownStates() {
    this.isAllCoursesShown = this.allCourses.length === this.allCoursesQuantity;
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
