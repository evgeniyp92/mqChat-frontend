import { Injectable } from '@angular/core';
import { ChatMessageObject } from './chat/chat-item/chat-item.component';
import * as localforage from 'localforage';

@Injectable({
  providedIn: 'root',
})
export class IndexedDBService {
  constructor() {}

  async getLocalStorage(): Promise<any[]> {
    const messages = await localforage.getItem('messages');
    console.log(messages);
    // @ts-expect-error
    return messages;
  }

  async setLocalStorage(newMessages: ChatMessageObject[]) {
    await localforage.setItem('messages', newMessages);
  }

  async getUserId() {
    return localStorage.getItem('userId')
      ? localStorage.getItem('userId')
      : null;
  }

  async setUserId(userId: string) {
    localStorage.setItem('userId', userId);
  }
}
