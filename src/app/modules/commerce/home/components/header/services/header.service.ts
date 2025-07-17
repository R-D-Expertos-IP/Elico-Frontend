import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private apiUrl = 'http://localhost:3000/elico-backend/cabecera/header';

  constructor(private http: HttpClient) {}

  getHeaderMenu(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
