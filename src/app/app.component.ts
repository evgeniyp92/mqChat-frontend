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
  username$ = this.backend.username$.subscribe();

  constructor(private backend: BackendService) {}

  ngOnInit() {
    this.backend.init().then(() => console.log('Done Initializing'));
    // read messages from localStorage and push to app state
    // expect a userid
    // open a connection to localhost:4500/[]
    // for each message received, push it to localStorage and update app state
  }

  handleOnMessageSubmit(event: ChatMessageObject) {
    console.log(event);
    // try to post it to event stream

    // update localStorage with the new message if successful

    // update app state with messages
    // TODO: Append the new message here
    this.messages = [...this.messages];
    this.backend.postNewMessage(event).then();
  }

  handleClick() {}
}
