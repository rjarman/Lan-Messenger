import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ActiveUser, Message, ServerData } from './shared/types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private activeUser: ActiveUser[];

  socket: WebSocket;
  replyEmitter = new Subject<ServerData>();
  onlineEmitter = new Subject<ActiveUser[]>();

  constructor() {
    this.socket = new WebSocket(environment.SOCKET);
    this.initSocketEvents();
  }

  private initSocketEvents() {
    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.online) {
        this.activeUser = data.online;
        this.onlineEmitter.next(this.activeUser);
      } else {
        this.replyEmitter.next(data);
      }
    };
  }

  send(emitValue: { type: string; data: { email: string; name: string } }) {
    this.socket.onopen = () => {
      this.socket.send(JSON.stringify(emitValue));
    };
  }

  message(emitValue: {
    type: string;
    data: { email: string; message: Message };
  }) {
    this.socket.send(JSON.stringify(emitValue));
  }

  disconnect(emitValue: {
    type: string;
    data: { email: string; name: string };
  }) {
    this.socket.send(JSON.stringify(emitValue));
    this.socket.close();
  }
}
