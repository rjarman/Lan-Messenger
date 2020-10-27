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
  clearData = new Subject<boolean>();

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService,
    private route: Router
  ) {}

  register(regData: { name: string; email: string; password: string }) {
    this.httpClient
      .post<{ data }>(
        environment.URL,
        { reqType: 'register', data: regData },
        { observe: 'response' }
      )
      .subscribe((response) => {
        const data = JSON.parse(response.body.data);
        if (data.status === 'ok') {
          this.clearData.next(true);
          this.cookieService.deleteAll('/', 'localhost');
          this.cookieService.set('_isUserLogin', 'true', 30000, '/', 'localhost');
          this.cookieService.set('email', data.email, 30000, '/', 'localhost');
          this.cookieService.set('name', data.name, 30000, '/', 'localhost');
          this.route.navigate(['/tabs']);
        }
      });
  }
  login(logData: { email: string; password: string }) {
    this.httpClient
      .post<{ data }>(
        environment.URL,
        { reqType: 'login', data: logData },
        { observe: 'response' }
      )
      .subscribe((response) => {
        const data = JSON.parse(response.body.data);
        if (data.status === 'ok') {
          this.clearData.next(true);
          this.cookieService.deleteAll('/', 'localhost');
          this.cookieService.set('_isUserLogin', 'true', 30000, '/', 'localhost');
          this.cookieService.set('email', data.email, 30000, '/', 'localhost');
          this.cookieService.set('name', data.name, 30000, '/', 'localhost');
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
