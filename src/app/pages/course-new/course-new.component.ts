import { Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

import { CourseService } from '../../shared/services';

@Component({
  selector: 'course-new',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./course-new.styles.scss'],
  templateUrl: './course-new.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseNewComponent implements OnInit {
  constructor(
    private route: ActivatedRoute
  ) {

  }

  public ngOnInit() {
  }

  public save() {
    console.log('save');
  }

  public cancel() {
    console.log('cancel');
  }
}
