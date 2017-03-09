import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

import { CourseService } from '../../shared/services';

@Component({
  selector: 'home',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./home.styles.scss'],
  templateUrl: './home.template.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  public ngOnInit() {
  }

  public ngOnDestroy() {
  }
}
