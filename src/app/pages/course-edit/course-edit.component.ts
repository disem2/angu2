import {
    Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy, OnDestroy,
    ChangeDetectorRef
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CourseService } from '../../shared/services';
import { CourseInterface } from '../../shared/interfaces/course.interface';

@Component({
  selector: 'course-edit',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./course-edit.styles.scss'],
  templateUrl: './course-edit.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseEditComponent implements OnInit, OnDestroy {
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

  public save() {
    console.log('save');
  }

  public cancel() {
    console.log('cancel');
  }
}
