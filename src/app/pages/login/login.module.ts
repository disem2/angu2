  // angular modules
  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { FormsModule } from '@angular/forms';

  // routes
  import { routes } from './login.routes';

  // custom components
  import { LoginComponent } from './login.component';

  @NgModule({
    declarations: [
      LoginComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      routes
    ],
    exports: [
      LoginComponent
    ]
  })
  export class LoginModule {
  }
