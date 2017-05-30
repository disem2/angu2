import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../services';

@Injectable()
export class CanActivateAuth implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  public canActivate(): boolean {
    let activateResult;

    if (!this.authService.isAuthenticated) {
      this.router.navigate(['/login']);

      activateResult = false;
    } else {
      activateResult = true;
    }

    return activateResult;
  }
}
