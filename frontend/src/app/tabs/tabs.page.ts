import { Component } from '@angular/core';
import { SocketService } from '../socket.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage {
  constructor(
    private socketService: SocketService,
    private cookieService: CookieService,
    private route: Router
  ) {
    this.socketService.send({
      type: 'connected_person',
      data: {
        email: this.cookieService.get('email'),
        name: this.cookieService.get('name'),
      },
    });
  }

  logout() {
    this.socketService.disconnect({
      type: 'disconnected_person',
      data: {
        email: this.cookieService.get('email'),
        name: this.cookieService.get('name'),
      },
    });
    this.cookieService.deleteAll('/', 'localhost');
    this.route.navigate(['/auth']);
  }
}
