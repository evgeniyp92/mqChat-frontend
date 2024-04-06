import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  message: string | '' = ''
  @Output() onMessageSubmit = new EventEmitter()

  handleSubmit() {
    this.onMessageSubmit.emit(this.message)
  }

  handleKeypress(_: any) {
    console.log('handleKeyPress');
  }
}
