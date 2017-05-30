import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AuthenticationService } from '../services';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CanDeactivateAuth implements CanDeactivate<Observable<boolean>|boolean> {
  constructor(
    private authService: AuthenticationService
  ) {}

  public canDeactivate(): Observable<boolean>|boolean {
    return Observable.of(this.authService.isAuthenticated);
  }
}
