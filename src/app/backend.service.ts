import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IndexedDBService } from './indexed-d-b.service';
import { ChatMessageObject } from './chat/chat-item/chat-item.component';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private indexedDBService: IndexedDBService) {}

  messages$ = new BehaviorSubject<any[]>([]);

  async init() {
    const messages = await this.indexedDBService.getLocalStorage();
    this.messages$.next(messages);
  }

  // TODO: Implement proper typing and data format for pushing data
  async postNewMessage(newMessage: any) {
    let messages = await this.indexedDBService.getLocalStorage();
    console.log(messages);
    messages = [...messages, newMessage];
    await this.indexedDBService.setLocalStorage(messages);
    this.messages$.next(messages);
  }
}
