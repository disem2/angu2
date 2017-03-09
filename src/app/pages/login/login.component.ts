import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./login.styles.scss'],
  templateUrl: './login.template.html'
})

export class LoginComponent implements OnInit, OnDestroy {
  public ngOnInit() {
    console.log('init');
  }

  public ngOnDestroy() {
    console.log('destroy');
  }
}
