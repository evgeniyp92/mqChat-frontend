import { Injectable } from '@angular/core';
import { ChatMessageObject } from './chat/chat-item/chat-item.component';
import * as localforage from 'localforage';

@Injectable({
  providedIn: 'root',
})
export class IndexedDBService {
  constructor() {}

  async getLocalStorage(): Promise<ChatMessageObject[]> {
    const messages = (await localforage.getItem(
      'messages',
    )) as ChatMessageObject[];
    console.log(messages);
    return messages;
  }

  async setLocalStorage(newMessages: ChatMessageObject[]) {
    await localforage.setItem('messages', newMessages);
  }

  async getUserId(): Promise<string | null> {
    return (await localforage.getItem('userId'))
      ? localforage.getItem('userId')
      : null;
  }

  async setUserId(userId: string) {
    await localforage.setItem('userId', userId);
  }
}
