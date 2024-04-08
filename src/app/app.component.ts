import { Component, OnInit } from '@angular/core';
import { BackendService } from './backend.service';
import { ChatMessageObject } from './chat/chat-item/chat-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  messages$ = this.backend.messages$.subscribe((v) => {
    console.log(v);
    this.messages = v;
  });
  messages: ChatMessageObject[] = [];

  constructor(private backend: BackendService) {}

  ngOnInit() {
    this.backend.init().then(() => console.log('Done Initializing'));
    // read messages from localStorage and push to app state
    // expect a userid
    // open a connection to localhost:4500/[]
    // for each message received, push it to localStorage and update app state
  }

  handleOnMessageSubmit(event: { messageText: string }) {
    console.log(event);
    const submit: ChatMessageObject = {
      message: event.messageText,
      // @ts-expect-error
      username: this.backend.username$.value,
      postDate: new Date(Date.now()),
    };
    console.log(submit);
    // try to post it to event stream

    // update localStorage with the new message if successful

    // update app state with message
    // this.backend.postNewMessage().then();
  }

  handleClick() {}
}
