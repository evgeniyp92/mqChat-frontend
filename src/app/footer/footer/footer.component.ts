import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  message: string | '' = ''

  handleSubmit() {
    console.log('handleSubmit');
  }

  handleKeypress(_: any) {
    console.log('handleKeyPress');
  }
}
