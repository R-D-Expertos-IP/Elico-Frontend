import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface NosotrosData {
  infocards: any[];
  timelineData: any[];
  cardAboutTexts: string[];
  certificadoCards: any[];
  cards: any[];
}

@Injectable({
  providedIn: 'root'
})
export class WeCompanyService {
  private apiUrl = 'http://localhost:3000/elico-backend/elico-backend/we-company/nosotros';


  constructor(private http: HttpClient) { }

  getNosotros(): Observable<NosotrosData> {
    return this.http.get<NosotrosData>(this.apiUrl);
  }
}
