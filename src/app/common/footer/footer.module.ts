﻿// angular modules
import { NgModule } from '@angular/core';

// Custom components
import { FooterComponent } from './footer.component';

// Router
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
    FooterComponent
  ],
	imports: [RouterModule],
	exports: [FooterComponent]
})
export class FooterModule {
}
