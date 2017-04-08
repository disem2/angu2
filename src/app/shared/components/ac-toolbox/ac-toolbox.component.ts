import { Component, ViewEncapsulation, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ac-toolbox',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./ac-toolbox.styles.scss'],
  templateUrl: './ac-toolbox.template.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcToolboxComponent implements OnInit {
  @Output()
  public filter = new EventEmitter();

  public searchValue;

  public ngOnInit() {
    this.searchValue = '';
  }

  public find() {
    this.filter.emit(this.searchValue);
  }
}
