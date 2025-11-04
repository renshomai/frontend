import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './post-detail.component.html'
})
export class PostDetailComponent implements OnInit {
  id!: number;
  post?: Post;
  loading = false;
  error?: string;

  constructor(private route: ActivatedRoute, private postsSvc: PostsService) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loading = true;
    this.postsSvc.getById(this.id).subscribe({
      next: p => { this.post = p; this.loading = false; console.log('Post:', p); },
      error: e => { this.error = 'Failed to load post.'; this.loading = false; console.error(e); }
    });
  }
}
