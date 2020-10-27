export interface ActiveUser {
  email: string;
  name: string;
}

export interface ServerData {
  email: string;
  message: Message;
}

export interface Message {
  type?: string;
  email?: string;
  name?: string;
  message: string;
  date?: string;
  time?: number;
}

export interface Profile {
  email: string;
  name: string;
  messages: Message[];
}

export interface UserList {
  email: string;
  name: string;
  message: string;
  time: number;
}
