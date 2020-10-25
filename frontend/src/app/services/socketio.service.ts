import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  public socket: any;

  constructor() {
    this.socket = io(environment.URL);
   }

   public emit(name: string, value: string) {
     this.socket.emit(name, value);
   }
}
