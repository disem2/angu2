import { Component, ViewEncapsulation, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { CourseService } from '../../shared/services';

@Component({
  selector: 'course-edit',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./course-edit.styles.scss'],
  templateUrl: './course-edit.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseEditComponent implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) {

  }

  public ngOnInit() {
    this.route.params
      .subscribe((course) => {
        this.courseService.setCurrentCourse(course);
      });
  }

  public ngOnDestroy() {
    this.courseService.setCurrentCourse(null);
  }

  public save() {
    this.courseService.updateCourse('1', {}).subscribe(() => {
      this.router.navigate(['/courses']);
    });
  }

  public cancel() {
    this.router.navigate(['/courses']);
  }
}
