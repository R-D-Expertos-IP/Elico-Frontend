import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PqrsfService {
  private apiUrl = 'http://localhost:3000/elico-backend/pqrsf';

  constructor(private http: HttpClient) {}

  getCampos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/campos`);
  }

  updateCampo(campo: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}`, campo);
  }

  insertarCampos(campos: any[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/insertar`, campos);
  }
}
