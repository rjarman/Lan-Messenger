import { Component } from '@angular/core';
import { SocketioService } from '../services/socketio.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage {
  constructor(
    private socketioService: SocketioService,
    private cookieService: CookieService,
    private route: Router
  ) {
    this.socketioService.socket.emit(
      'connected person',
      this.cookieService.get('email')
    );
  }

  logout() {
    this.socketioService.socket.emit(
      'disconnected person',
      this.cookieService.get('email')
    );
    this.cookieService.deleteAll();
    this.route.navigate(['/auth']);
  }
}
