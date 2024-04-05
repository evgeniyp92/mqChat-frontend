import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ChatMessageObject} from "./chat/chat-item/chat-item.component";
import * as localforage from "localforage";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public chatItems$ = new BehaviorSubject<ChatMessageObject[] | null>(null)

  readLocalStorage() {
    return
  }

  checkMessages() {

  }
}
