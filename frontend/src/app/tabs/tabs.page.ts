import { Component, OnInit } from '@angular/core';
import { SocketioService } from '../services/socketio.service';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(private socketioService: SocketioService, private cookieService: CookieService) {
    this.socketioService.socket.emit('connected person', this.cookieService.get('email'));
    console.log(this.cookieService.get('email'));
  }

  ngOnInit() {
    console.log('destroyed');
  }

}
