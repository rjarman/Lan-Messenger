import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/server.service';
import { UserList } from 'src/app/types';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  isEmpty: boolean;
  userList: UserList[];

  constructor(private serverService: ServerService) {
    this.isEmpty = true;
  }

  ngOnInit() {
    this.serverService.userDataInterval.subscribe((response) => {
      try {
        this.userList = JSON.parse(response.body.data);
        this.userList.sort((a, b) => (a.time < b.time ? 1 : -1));
        if (this.userList.length) {
          this.isEmpty = false;
        }
      } catch (e) {}
    });
  }
}
