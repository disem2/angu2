import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LoaderService {
  public isLoading;
  public loadingChange: Subject<Boolean> = new Subject<Boolean>();

  constructor() {
    this.isLoading = false;
  }

  public show() {
    this.isLoading = true;
    this.loadingChange.next(this.isLoading);
  }

  public hide() {
    this.isLoading = false;
    this.loadingChange.next(this.isLoading);
  }
}
