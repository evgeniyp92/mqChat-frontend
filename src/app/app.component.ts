import {Component, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mqChat-frontend';

  messages = [
    {
      message: 'Welcome to mqChat-frontend',
    }
  ]

  handleClick() {
    this.messages = [...this.messages, ...this.messages]
    console.log(this.messages)
  }
}
