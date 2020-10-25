import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { Message } from 'src/app/shared/message';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  public messages: Message[];

  constructor(private messageService: MessagesService) { }

  ngOnInit() {
    this.messages = this.messageService.getMessages();
  }

}
