import { Component, OnInit } from '@angular/core';
import { ActiveUser } from 'src/app/types';
import { SocketService } from 'src/app/socket.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-active',
  templateUrl: './active.page.html',
  styleUrls: ['./active.page.scss'],
})
export class ActivePage implements OnInit {
  onlineUser: ActiveUser[];

  constructor(
    private socketService: SocketService,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    this.socketService.onlineEmitter.subscribe((list) => {
      this.onlineUser = list;
      this.removeSelf();
    });
  }

  private removeSelf() {
    let index = -1;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.onlineUser.length; i++) {
      if (this.onlineUser[i].email === this.cookieService.get('email')) {
        index = i;
      }
    }
    if (index > -1) {
      this.onlineUser.splice(index, 1);
    }
  }
}
