import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'ac-toolbox',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./ac-toolbox.styles.scss'],
  templateUrl: './ac-toolbox.template.html'
})
export class AcToolboxComponent implements OnInit {
  public searchValue;

  public ngOnInit() {
    this.searchValue = '';
  }

  public find() {
    console.log(this.searchValue);
  }
}
