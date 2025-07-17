import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PqrsfService {
  private apiUrl = 'http://localhost:3000/elico-backend/pqrsf';

  constructor(private http: HttpClient) {}

  getFormConfig(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
