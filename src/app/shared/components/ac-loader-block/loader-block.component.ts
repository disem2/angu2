import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { LoaderService } from '../../services';

@Component({
  selector: 'ac-loader',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./loader-block.styles.scss'],
  templateUrl: './loader-block.template.html'
})
export class AcLoaderBlockComponent {
  public isLoading;
  private loadingSubscription;

  constructor(private loaderService: LoaderService) {
    this.isLoading = false;

    this.loadingSubscription = this.loaderService.loadingChange.subscribe((value: Boolean) => {
      this.isLoading = value;
    });
  };
}
