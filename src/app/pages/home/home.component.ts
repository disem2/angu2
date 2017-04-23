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
  }

  public isError;
  public courses;
  public isBusy;
  public isAllCoursesShown;
  private coursesSubscription;
  private allCourses;
  private startCourseIndex;
  private requestCoursesQuantity;
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
    this.requestCoursesQuantity = 0;
  }

  public ngOnInit() {
    this.loaderService.show();
    this.isBusy = true;

    this.getCourses(this.startCourseIndex, QUANTITY_FOR_REQUEST);

    this.makeSubscriptions();

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

  public makeSubscriptions() {
    this.coursesSubscription = this.courseService.coursesObserver
      .subscribe(
      (courses) => {
        this.ref.markForCheck();

        console.log(courses);

        // Turned off for now
        // this.allCourses = HomeComponent.filterOutOldCourses(courses);
        this.allCourses = HomeComponent.cloneData(courses);
        this.courses = HomeComponent.cloneData(this.allCourses);
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
    this.isAllCoursesShown = this.courses.length < this.startCourseIndex;
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
