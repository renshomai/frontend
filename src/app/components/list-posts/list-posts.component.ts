import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-posts.component.html'
})
export class ListPostsComponent implements OnInit {
  posts: Post[] = [];
  loading = false;
  error?: string;

  constructor(private postsSvc: PostsService) {}

  ngOnInit(): void {
    this.loading = true;
    this.postsSvc.getAll().subscribe({
      next: data => { this.posts = data ?? []; this.loading = false; console.log('Posts:', this.posts); },
      error: err => { this.error = 'Failed to load posts.'; this.loading = false; console.error(err); }
    });
  }
}
