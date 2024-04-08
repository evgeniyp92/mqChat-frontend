import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BackendService } from '../../backend.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  userName: FormControl<string | null> = new FormControl(null);
  userName$ = this.backendService.username$.subscribe((v) => {
    if (v) {
      this.userName.setValue(v);
    }
  });

  constructor(private backendService: BackendService) {}

  ngOnInit() {
    // set the userName in header state to be the already set username from indexeddb, if one exists
    const userName = this.backendService.username$.getValue();
    if (userName) {
      this.userName.setValue(userName);
    }
  }
}
