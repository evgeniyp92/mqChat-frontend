import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IndexedDBService } from './indexed-d-b.service';
import { ChatMessageObject } from './chat/chat-item/chat-item.component';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private indexedDBService: IndexedDBService) {}

  messages$ = new BehaviorSubject<ChatMessageObject[]>([]);
  username$ = new BehaviorSubject<string | null>(null);

  async init() {
    const messages = await this.indexedDBService.getLocalStorage();
    this.messages$.next(messages);
    const username = await this.indexedDBService.getUserId();
    if (username) {
      this.username$.next(username);
    } else {
      this.username$.next('Anony Mouse');
    }
  }

  // TODO: Implement proper typing and data format for pushing data
  async postNewMessage(newMessage: ChatMessageObject) {
    let messages = await this.indexedDBService.getLocalStorage();
    console.log(messages);
    messages = [...messages, newMessage];
    await this.indexedDBService.setLocalStorage(messages);
    this.messages$.next(messages);
  }

  async setUsername(username: string | null) {
    const result = await this.indexedDBService.setUserId(username);
    this.username$.next(result.username);
  }
}
