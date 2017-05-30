import { Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CourseService } from '../../../../shared/services';
import { Router } from '@angular/router';

@Component({
  selector: 'ac-breadcrumbs',
  encapsulation: ViewEncapsulation.Emulated,
  providers: [],
  styleUrls: ['ac-breadcrumbs.styles.scss'],
  templateUrl: 'ac-breadcrumbs.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcBreadcrumbsComponent implements OnInit {
  public course: Object;

  constructor(
    private courseService: CourseService,
    private ref: ChangeDetectorRef,
    private router: Router
  ) {

  }

  public ngOnInit() {
    this.courseService.currentCourseChange.subscribe((course) => {

      this.ref.markForCheck();

      this.course = course;
    })
  }

  public goToCourses() {
    this.router.navigate(['/courses']);
  }
}
