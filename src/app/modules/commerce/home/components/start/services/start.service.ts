import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StartService {
  private apiUrl = 'http://localhost:3000/elico-backend/start';
 


  constructor(private http: HttpClient) {}

  getInicioData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
