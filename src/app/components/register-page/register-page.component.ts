import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { RegisterRequest } from '../../models/auth.model';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register-page.component.html'
})
export class RegisterPageComponent {
  form: RegisterRequest = { email: '', password: '', fullName: '' };
  loading = false;
  error?: string;

  constructor(
    private auth: AuthService,
    private token: TokenStorageService,   // keep injected if you might use later
    private router: Router
  ) {}

  submit(): void {
    this.loading = true;
    this.error = undefined;

    this.auth.register(this.form).subscribe({
      next: () => {
        this.loading = false;
        // Do NOT set token here so the user logs in explicitly
        // Optional: clear the form
        this.form = { email: '', password: '', fullName: '' };

        // Redirect to login with a small flag you can read if you want a message
        this.router.navigate(['/login'], { queryParams: { registered: '1' } });
      },
      error: (e) => {
        this.loading = false;
        this.error = 'Registration failed.';
        console.error(e);
      }
    });
  }
}
