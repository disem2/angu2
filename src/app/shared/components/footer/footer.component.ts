  import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

  @Component({
    selector: 'ac-footer',
    templateUrl: './footer.template.html',
    styleUrls: ['./footer.styles.scss'],
    providers: [],
    encapsulation: ViewEncapsulation.None
  })
  export class FooterComponent implements OnInit, OnDestroy {
    public ngOnInit() {
    }

    public ngOnDestroy() {
    }
  }
