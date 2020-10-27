import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { Message, ServerData } from '../shared/types';
import { ActivatedRoute } from '@angular/router';
import { SocketService } from '../socket.service';
import { ServerService } from '../server.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements AfterViewChecked, AfterViewInit, OnInit {
  private scrollStatus;

  chatEmail: string;
  chatUserName: string;
  sentMessage: string;
  isTyping: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cookieService: CookieService,
    private socketService: SocketService,
    private serverService: ServerService
  ) {
    this.isTyping = false;
    this.scrollStatus = true;
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((data) => {
      this.chatEmail = data.email;
      this.chatUserName = data.name;
    });

    this.serverService
      .getSpecUserData({
        userEmail: this.cookieService.get('email'),
        messageEmail: this.chatEmail,
      })
      .subscribe((response) => {
        this.dataParser(JSON.parse(response.body.data));
      });
  }

  ngAfterViewInit(): void {
    this.socketService.replyEmitter.subscribe((data) => {
      this.replyHandler(data);
    });
  }

  ngAfterViewChecked() {
    if (this.scrollStatus === true) {
      document.getElementById('scrollToLast').scrollIntoView();
    } else if (this.scrollStatus === false) {
      document.getElementById('typingScroll').scrollIntoView();
    }
  }

  private dataParser(messages: Message[]) {
    messages.sort((a, b) => (a.time > b.time ? 1 : -1));
    this.messageParser(messages);
  }

  private messageParser(messages: Message[]) {
    messages.forEach((message) => {
      if (message.type === 'send') {
        document.getElementById('messageData').innerHTML += `
        <div class="chat-bubble send" style="opacity: 100%;">
          <h6>${message.message}</h6>
          <p>${this.cookieService.get('name')} at ${message.date}</p>
        </div>
        `;
      }
      if (message.type === 'reply') {
        document.getElementById('messageData').innerHTML += `
        <div class="chat-bubble received" style="opacity: 100%;">
          <h6>${message.message}</h6>
          <p>${message.name} at ${message.date}</p>
        </div>
        `;
      }
    });
  }

  private replyHandler(replyData: ServerData) {
    try {
      this.scrollStatus = false;
      document.getElementById('messageData').innerHTML += `
        <div class="chat-bubble received" style="opacity: 100%;">
          <h6>${replyData.message.message}</h6>
          <p>${replyData.message.name} at ${replyData.message.date}</p>
        </div>`;
      this.isTyping = false;
      document.getElementById('scrollToLast').scrollIntoView();
      this.scrollStatus = null;
    } catch (e) {}
  }

  sendMessage() {
    let flag = false;
    if (this.sentMessage !== undefined) {
      if (
        this.sentMessage[0].charCodeAt(0) === 10 ||
        this.sentMessage[0].charCodeAt(0) === 32
      ) {
        const emptyChecker = new Set(this.sentMessage);
        emptyChecker.forEach((data) => {
          if (data.charCodeAt(0) !== 10 && data.charCodeAt(0) !== 32) {
            flag = true;
            return;
          } else {
            this.sentMessage = undefined;
          }
        });
      } else {
        flag = true;
      }
      if (flag) {
        this.isTyping = true;
        this.socketService.message({
          type: 'message',
          data: {
            email: this.cookieService.get('email'),
            message: {
              type: 'send',
              email: this.chatEmail,
              name: this.chatUserName,
              message: this.sentMessage,
              date: this.serverService.dateTimeParser,
              time: Date.now(),
            },
          },
        });
        document.getElementById('messageData').innerHTML += `
        <div class="chat-bubble send" style="opacity: 100%;">
          <h6>${this.sentMessage}</h6>
          <p>${this.cookieService.get('name')} at ${
          this.serverService.dateTimeParser
        }</p>
        </div>
        `;
        this.scrollStatus = true;
        this.sentMessage = undefined;
      }
    }
  }
}
