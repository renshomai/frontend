import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { TokenStorageService } from './token-storage.service';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private base = environment.apiBaseUrl;

  constructor(private http: HttpClient, private token: TokenStorageService) {}

  private authHeaders(): HttpHeaders {
    const t = this.token.getToken();
    return new HttpHeaders(t ? { Authorization: `Bearer ${t}` } : {});
  }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.base}/api/posts`);
  }

  getById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.base}/api/posts/${id}`);
  }

  create(post: Pick<Post, 'title' | 'content'>): Observable<Post> {
    return this.http.post<Post>(
      `${this.base}/api/posts`,
      post,
      { headers: this.authHeaders() }
    );
    // Add update/delete later if needed
  }
}
