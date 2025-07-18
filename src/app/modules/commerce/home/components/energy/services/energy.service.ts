import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EnergyService {
  private apiUrl = 'http://localhost:3000/elico-backend/energia';

  constructor(private http: HttpClient) {}

  getEnergyData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/1`);
  }
}
