import { Injectable } from '@angular/core';
import { Message } from 'src/app/shared/message';
import { MESSAGES } from 'src/app/shared/messages';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private messages: Message[];

  constructor() {
    this.messages = MESSAGES;
   }

  getMessages(){
    return MESSAGES;
  }

  getUserDetails(userId){
    for(let message of this.messages){
      if(message.userId === userId){
        return message;
      }
    }
  }
}
