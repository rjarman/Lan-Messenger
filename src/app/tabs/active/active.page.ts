import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { Message } from 'src/app/shared/message';

@Component({
  selector: 'app-active',
  templateUrl: './active.page.html',
  styleUrls: ['./active.page.scss'],
})
export class ActivePage implements OnInit {

  private messages: Message[];

  constructor(private messageSerivice: MessagesService) { }

  ngOnInit() {
    this.messages = this.messageSerivice.getMessages();
  }

}
