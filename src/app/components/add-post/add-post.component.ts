import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-post.component.html'
})
export class AddPostComponent {
  title = '';
  content = '';
  loading = false;
  error?: string;
  message?: string;

  constructor(private posts: PostsService, private router: Router) {}

  submit(): void {
    this.loading = true;
    this.error = undefined;
    this.message = undefined;
    this.posts.create({ title: this.title, content: this.content }).subscribe({
      next: created => {
        this.loading = false;
        this.message = 'Post created!';
        this.router.navigate(['/posts', created.id]);
      },
      error: e => {
        this.loading = false;
        this.error = 'Failed to create post. Are you logged in?';
        console.error(e);
      }
    });
  }
}
