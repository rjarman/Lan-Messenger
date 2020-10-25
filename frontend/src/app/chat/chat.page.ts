import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages.service';
import { Message } from '../shared/message';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  private messages: Message[];
  private userId: string;
  private userDetails: Message;

  constructor(
    private messsageService: MessagesService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(userId => {
      this.userId = userId.userId;
    });
    this.messages = this.messsageService.getMessages();
    this.userDetails = this.messsageService.getUserDetails(this.userId);
  }
}
