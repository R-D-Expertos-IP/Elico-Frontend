import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DigitalizationService {

  
  private apiUrl = 'http://localhost:3000/elico-backend/digitalization';

  constructor(private http: HttpClient) {}

  getDigitalization() {
    return this.http.get<any>(this.apiUrl);
  }
}
