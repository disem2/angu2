// angular modules
import { NgModule } from '@angular/core';

// Custom components
import { HeaderComponent } from './header.component';
import { AcAuthControlComponent, AcBreadcrumbsComponent } from './components';
import { SharedModule } from '../../shared';

// Router
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
    HeaderComponent,
    AcAuthControlComponent,
    AcBreadcrumbsComponent
  ],
	imports: [RouterModule, SharedModule],
	exports: [HeaderComponent]
})
export class HeaderModule {
}
