// angular modules
import { NgModule } from '@angular/core';

// Custom components
import { AcLogoComponent } from '../../shared';
import { HeaderComponent } from './header.component';
import { AcAuthControlComponent, AcBreadcrumbsComponent } from './components';

// Router
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
    AcLogoComponent,
    HeaderComponent,
    AcAuthControlComponent,
    AcBreadcrumbsComponent
  ],
	imports: [RouterModule],
	exports: [HeaderComponent]
})
export class HeaderModule {
}
