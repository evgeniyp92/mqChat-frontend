import {Component, Input} from '@angular/core';

export interface ChatMessageObject {
  username: string;
  postDate: Date;
  message: string;
}

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrl: './chat-item.component.css'
})
export class ChatItemComponent {
  @Input() messageObject: { message: string } | null = null
}
