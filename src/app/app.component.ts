import { Component, OnInit } from '@angular/core';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  // messages = [{ message: 'Welcome to mqChat-frontend' }];
  // test = this.backend.messages$.subscribe((v) => {
  //   console.log(v);
  // });
  messages$ = this.backend.messages$.subscribe((v) => {
    console.log(v);
    this.messages = v;
  });
  messages: any[] = [];

  constructor(private backend: BackendService) {}

  ngOnInit() {
    this.backend.init().then(() => console.log('Done Initializing'));
    // read messages from localStorage and push to app state
    // expect a userid
    // open a connection to localhost:4500/[]
    // for each message received, push it to localStorage and update app state
  }

  handleOnMessageSubmit(event: any) {
    console.log(event);
    // try to post it to event stream

    // update localStorage with the new message if successful

    // update app state with messages
    this.messages = [...this.messages, { message: event }];
    this.backend.postNewMessage(event);
  }

  handleClick() {}
}
