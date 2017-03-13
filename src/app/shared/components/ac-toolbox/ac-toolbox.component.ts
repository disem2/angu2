import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'ac-toolbox',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./ac-toolbox.styles.scss'],
  templateUrl: './ac-toolbox.template.html'
})
export class AcToolboxComponent {
  public searchValue;

  ngOnInit() {
    this.searchValue = '';
  }

  find() {
    console.log(this.searchValue);
  }
}
