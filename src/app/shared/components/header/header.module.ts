// angular modules
import { NgModule } from '@angular/core';

// Custom components
import { HeaderComponent } from './header.component';
import { AcAuthControlComponent, AcBreadcrumbsComponent } from './components';
import { AcLogoComponent } from '../ac-logo';

// Router
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
    HeaderComponent,
    AcAuthControlComponent,
    AcBreadcrumbsComponent,
    AcLogoComponent
  ],
	imports: [RouterModule],
	exports: [HeaderComponent]
})
export class HeaderModule {
}
