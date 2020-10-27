import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { interval } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) {}

  get userDataInterval() {
    return interval(1000).pipe(
      flatMap(() => {
        return this.httpClient.post<{ data: string }>(
          environment.URL,
          { reqType: 'userData', data: this.cookieService.get('email') },
          {
            observe: 'response',
          }
        );
      })
    );
  }

  get dateTimeParser(): string {
    const dateOptions = {
      month: 'long',
      day: 'numeric',
    };
    return new Date().toLocaleDateString('en-BD', dateOptions);
  }

  getSpecUserData(value: { userEmail: string; messageEmail: string }) {
    return this.httpClient.post<{ data: string }>(
      environment.URL,
      { reqType: 'userSpecData', data: value },
      {
        observe: 'response',
      }
    );
  }
}
