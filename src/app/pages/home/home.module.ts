  // angular modules
  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';

  // routes
  import { routes } from './home.routes';

  // custom components
  import { HomeComponent } from './home.component';
  import { SharedModule } from '../../shared';

  @NgModule({
    declarations: [
      HomeComponent
    ],
    imports: [
      routes,
      BrowserModule,
      SharedModule
    ],
    exports: [
      HomeComponent
    ]
  })
  export class HomeModule {
  }
