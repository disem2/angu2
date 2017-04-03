import { Directive, ElementRef, Input } from '@angular/core';

const borderColors = {
  fresh: '#09db09',
  upcoming: 'blue',
  default: 'black'
};

@Directive({
  selector: '[courseHighlight]'
})

export class HighlightDirective {
  @Input('courseHighlight') private createdDate: Date;

  constructor(
    private el: ElementRef) {
  }

  private ngOnChanges() {
    this.setBorderColor();
  }

  private setBorderColor() {
    const dateNow = new Date();
    const freshDate = new Date(new Date().setDate(dateNow.getDate() - 14));

    const type = this.createdDate < dateNow && this.createdDate >= freshDate ? 'fresh'
                : this.createdDate > dateNow ? 'upcoming'
                : 'default';

    this.el.nativeElement.style.borderColor = borderColors[type];
  }
}
