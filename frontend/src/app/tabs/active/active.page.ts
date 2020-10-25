import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/shared/types';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.page.html',
  styleUrls: ['./active.page.scss'],
})
export class ActivePage implements OnInit {
  onlineUser: Profile[];
  userData: string;

  constructor(private serverService: ServerService) {}

  ngOnInit() {
    this.serverService.getUserDataInterval.subscribe((response) => {
      this.onlineUser = response.body.status;
      this.userData = JSON.stringify(this.onlineUser);
    });
  }
}
