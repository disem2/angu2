// angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
	imports: [RouterModule, SharedModule, CommonModule],
	exports: [HeaderComponent]
})
export class HeaderModule {
}
