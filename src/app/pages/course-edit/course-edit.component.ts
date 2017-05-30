import { 
  Component, ViewEncapsulation, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
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

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private ref: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router
  ) {
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
    this.courseService.setCurrentCourse(null);
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
    this.courseService.updateCourse('1', {}).subscribe(() => {
      this.router.navigate(['/courses']);
    });
  }

  public cancel() {
    this.router.navigate(['/courses']);
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

    this.route.params
      .subscribe((course) => {
        this.courseService.setCurrentCourse(course);
      });
  }

  private unsubscribe() {
    this.paramsSubscription.unsubscribe();
    this.courseSubscription.unsubscribe();
    this.editForm.valueChanges.unsubscribe();
    this.route.params.unsubscribe();
  }
}
