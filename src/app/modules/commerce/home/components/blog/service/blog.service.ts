import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BlogService {
  private apiUrl = 'http://localhost:3000/elico-backend/blog';

  constructor(private http: HttpClient) {}

  getBlog(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  updateBlog(data: any): Observable<any> {
    return this.http.patch(this.apiUrl, data);
  }
}
