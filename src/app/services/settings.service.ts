import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SocketioService } from './socketio.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private subject = new Subject<boolean>();

  constructor(private router: Router, private cookieService: CookieService, private socketioService: SocketioService) { }

  get isLogin(): Observable<boolean> {
    return this.subject.asObservable();
  }

  // set setCookie(cookie: CookieService) {
  //   this.cookieService = cookie;
  // }

  public logout() {
    // this.subject.next(false);
    this.socketioService.socket.emit('disconnected person', this.cookieService.get('email'));
    this.cookieService.deleteAll();
    this.router.navigate(['/auth']);
  }
}
