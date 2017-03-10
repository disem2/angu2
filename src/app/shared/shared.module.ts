// angular modules
import { NgModule } from '@angular/core';

// Custom modules
import { HeaderModule, FooterModule } from './components';

@NgModule({
  exports: [
    HeaderModule,
    FooterModule
  ]
})
export class SharedModule {
}
