import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { LoginRequest } from '../../models/auth.model';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent {
  form: LoginRequest = { email: '', password: '' };
  loading = false;
  error?: string;

  constructor(private auth: AuthService, private token: TokenStorageService, private router: Router) {}

  submit(): void {
    this.loading = true;
    this.error = undefined;
    this.auth.login(this.form).subscribe({
      next: res => {
        this.token.setToken(res.token);
        this.loading = false;
        this.router.navigateByUrl('/');
      },
      error: e => {
        this.error = 'Invalid email or password.';
        this.loading = false;
        console.error(e);
      }
    });
  }
}
