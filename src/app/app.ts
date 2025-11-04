import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgIf],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  constructor(private token: TokenStorageService) {}

  get loggedIn() { return this.token.isLoggedIn(); }

  logout() {
    this.token.clear();
    // optional: window.location.reload();  // to refresh UI immediately
  }
}
