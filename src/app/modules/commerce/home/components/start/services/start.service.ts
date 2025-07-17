import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StartService {
  private readonly baseUrl = 'http://localhost:3000/elico-backend/start';

  constructor(private http: HttpClient) {}

  getStartData(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
}
