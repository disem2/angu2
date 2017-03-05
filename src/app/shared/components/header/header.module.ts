// angular modules
import { NgModule } from '@angular/core';

// Custom components
import { HeaderComponent } from './header.component';
import { AcAuthControlComponent, AcBreadcrumbsComponent } from './components';

// Router
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
    HeaderComponent,
    AcAuthControlComponent,
    AcBreadcrumbsComponent
  ],
	imports: [RouterModule],
	exports: [HeaderComponent] //todo ask about this
})
export class HeaderModule {
	constructor() {
	}
}
