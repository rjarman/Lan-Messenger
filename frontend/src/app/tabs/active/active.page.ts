import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { Message } from 'src/app/shared/message';
import { OnlineUser } from 'src/app/shared/onlineUser';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-active',
  templateUrl: './active.page.html',
  styleUrls: ['./active.page.scss'],
})
export class ActivePage implements OnInit, OnDestroy {

  public messages: Message[];
  public onlineUser: OnlineUser[];
  private intervalEnd;

  constructor(private httpClient: HttpClient) {
   }

  ngOnInit() {
    // this.messages = this.messageSerivice.getMessages();
    this.intervalEnd = setInterval(() => {
      this.httpClient.post(environment.ONLINE_USER_URL, {observe: 'response'}).subscribe(response => {
        this.onlineUser = response['data'];
        // console.log(this.onlineUser);
      });
    }, 2000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalEnd);
  }

}
