import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  clearData = new Subject<Boolean>();

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService,
    private route: Router
  ) {}

  register(regData: { userName: string; email: string; password: string }) {
    this.httpClient
      .post<{ status }>(
        environment.URL,
        { reqType: 'register', data: regData },
        { observe: 'response' }
      )
      .subscribe((response) => {
        if (response.body.status === 'ok') {
          this.clearData.next(true);
          this.cookieService.deleteAll();
          this.cookieService.set('_isUserLogin', 'true');
          this.cookieService.set('email', regData.email);
          this.route.navigate(['/tabs']);
        }
      });
  }
  login(logData: { email: string; password: string }) {
    this.httpClient
      .post<{ status }>(
        environment.URL,
        { reqType: 'login', data: logData },
        { observe: 'response' }
      )
      .subscribe((response) => {
        if (response.body.status === 'ok') {
          this.clearData.next(true);
          this.cookieService.deleteAll();
          this.cookieService.set('_isUserLogin', 'true');
          this.cookieService.set('email', logData.email);
          this.route.navigate(['/tabs']);
        }
      });
  }

  isUserLogin() {
    if (this.cookieService.get('_isUserLogin') === 'true') {
      return true;
    }
    return false;
  }
}
