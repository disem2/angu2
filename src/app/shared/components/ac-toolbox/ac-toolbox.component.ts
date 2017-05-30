import { Component, ViewEncapsulation, OnInit, OnDestroy, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ac-toolbox',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./ac-toolbox.styles.scss'],
  templateUrl: './ac-toolbox.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcToolboxComponent implements OnInit, OnDestroy {
  @Output()
  public filter = new EventEmitter();

  constructor(
    private router: Router
  ) {

  }

  public searchValue;

  public ngOnInit() {
    this.searchValue = '';
  }

  public ngOnDestroy() {

  }

  public find() {
    this.filter.emit(this.searchValue);
  }

  public goToCourseNew() {
    this.router.navigate(['/courses/new']);
  }
}
