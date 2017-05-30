import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ac-authors-block',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./authors-block.styles.scss'],
  templateUrl: './authors-block.template.html'
})
export class AcAuthorsBlockComponent {
  @Input()
  public authors: Object[];

  @Output()
  public authorsChange = new EventEmitter();

  constructor() {
    console.log(this.authors);
  }

  public authorsChangeEvent() {
    this.authorsChange.emit(this.authors);
  }
}
