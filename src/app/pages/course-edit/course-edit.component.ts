import {
  Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy, OnDestroy,
  ChangeDetectorRef, ViewChild
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CourseService } from '../../shared/services';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'course-edit',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./course-edit.styles.scss'],
  templateUrl: './course-edit.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseEditComponent implements OnInit, OnDestroy {
  @ViewChild('editForm') public editForm: NgForm;

  public course;
  private courseSubscription;
  private paramsSubscription;

  constructor(private activatedRoute: ActivatedRoute,
              private courseService: CourseService,
              private ref: ChangeDetectorRef) {
    this.course = {};
  }

  public ngOnInit() {
    this.paramsSubscription = this.activatedRoute.params.subscribe((params: Params) => {
      this.courseService.getCourseById(params.id);

      this.courseSubscription = this.courseService.courseObserver
          .subscribe(
              (course) => {
                this.ref.markForCheck();

                this.course = course;
              }
          );
    });
  }

  public ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
    this.courseSubscription.unsubscribe();
  }

  public dateChange(date) {
    // TODO make form invalid if date - null
    if (date) {
      this.course.date = date;
    }
  }

  public durationChange(duration: number): void {
    if (duration) {
      this.course.duration = duration;
    } else if (duration === 0) {
      this.course.duration = null;
    }
  }

  public save() {
    console.log(this.course);
  }

  public cancel() {
    console.log('cancel');
  }
}
