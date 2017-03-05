import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

@Component({
	selector: 'ac-footer',
	templateUrl: [require('./footer.template.html')],
	styles: [require('./footer.styles.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit, OnDestroy {
	constructor() {

	}
  public ngOnInit() {
  }

  public ngOnDestroy() {
  }
}
