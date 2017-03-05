import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

@Component({
	selector: 'ac-header',
	templateUrl: [require('./header.template.html')],
	styles: [require('./header.styles.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit, OnDestroy {
	constructor() {

	}
  public ngOnInit() {
  }

  public ngOnDestroy() {
  }
}
