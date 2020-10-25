import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService, private route: Router) {}

  canLoad(): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.authService.isUserLogin()) {
      this.route.navigateByUrl('/auth');
    }
    return this.authService.isUserLogin();
  }
}
