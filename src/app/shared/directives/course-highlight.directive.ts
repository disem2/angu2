import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

const borderColors = {
  fresh: '#09db09',
  upcoming: 'blue',
  default: 'black'
};

@Directive({
  selector: '[courseHighlight]'
})

export class HighlightDirective implements OnChanges {
  @Input() private createdDate: Date;

  constructor(private el: ElementRef) {
    console.log(this);
  }

  public ngOnChanges() {
    this.setBorderColor();
  }

  private setBorderColor() {
    const dateNow = new Date();
    const timeNow = dateNow.getTime();
    const freshTime = new Date(new Date().setDate(dateNow.getDate() - 14)).getTime();
    const createdTime = new Date(this.createdDate).getTime();

    const type = createdTime < timeNow && createdTime >= freshTime ? 'fresh'
                : createdTime > timeNow ? 'upcoming'
                : 'default';

    this.el.nativeElement.style.borderColor = borderColors[type];
  }
}
