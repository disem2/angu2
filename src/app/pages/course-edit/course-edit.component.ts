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

  private static checkAuthorsValid(authors) {
    for (const author of authors) {
      if (author.checked) {
        return true;
      }
    }
  }

  public course;
  public isFormValid: boolean;
  public isDateValid: boolean;
  private courseSubscription;
  private paramsSubscription;

  constructor(private activatedRoute: ActivatedRoute,
              private courseService: CourseService,
              private ref: ChangeDetectorRef) {
    this.course = {};
    this.isFormValid = false;
    this.isDateValid = true;
  }

  public ngOnInit() {
    this.makeSubscriptions();
    this.checkFormValidity();
  }

  public ngOnDestroy() {
    this.unsubscribe();
  }

  public dateChange(date) {
    console.log(date);
    this.course.date = date;

    this.checkFormValidity();
  }

  public durationChange(duration: number): void {
    if (duration) {
      this.course.duration = duration;
    } else if (duration === 0) {
      this.course.duration = null;
    }

    this.checkFormValidity();
  }

  public authorsChange(authors: Object[]): void {
    if (authors) {
      this.course.authors = authors;
    }

    this.checkFormValidity();
  }

  public checkFormValidity() {

    this.ref.markForCheck();

    this.isFormValid = this.editForm.valid
      && this.isDateValid
      && !!this.course.duration
      && !!CourseEditComponent.checkAuthorsValid(this.course.authors);
  }

  public save() {
    console.log(this.course);
  }

  public cancel() {
    console.log('cancel');
  }

  public setDateValidity(state) {
    this.isDateValid = state;
    this.checkFormValidity();
  }

  private makeSubscriptions() {
    this.paramsSubscription = this.activatedRoute.params.subscribe((params: Params) => {
      this.courseService.getCourseById(params.id);
    });

    this.courseSubscription = this.courseService.courseObserver
      .subscribe(
        (course) => {
          this.ref.markForCheck();

          this.course = course;
        }
      );

    this.editForm.valueChanges.subscribe(() => {
      this.checkFormValidity();
    });
  }

  private unsubscribe() {
    this.paramsSubscription.unsubscribe();
    this.courseSubscription.unsubscribe();
    this.editForm.valueChanges.unsubscribe();
  }
}
