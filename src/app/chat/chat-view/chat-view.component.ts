import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrl: './chat-view.component.css'
})
export class ChatViewComponent {
  @Input() messages: {message: string}[] | null = null
  chatItems$ = []
}
