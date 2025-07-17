import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,  catchError, map, throwError } from 'rxjs';
import { IHeader } from '../interface/header-gestion.interface';
import { environment } from '../../../../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class HeaderGestionService {



  private url = environment.endpoint

  constructor(private http: HttpClient) { }


  // /**
  //  * metodo para traer los modulos del header
  //  * @returns Array<IHeader>
  //  */
  public header(): Observable<Array<IHeader>> {
    return this.http.get<Array<IHeader>>(`${this.url}/headerWeb`)
  }

  public updateHeader(header: IHeader): Observable<IHeader> {
  return this.http.patch<IHeader>(`${this.url}/headerWeb`, header);
}


  // /**
  //  * metodo del servicio de users para crear un User
  //  * @param user
  //  * @returns IUser
  //  */
  // newUser(user: IUser): Observable<IUser> {
  //   return this.http.post<IUser>(`${this.url}/users`, user);
  // }

  // /**
  //  * metodo del servicio de users para editar un User
  //  * @param user
  //  * @returns IUser
  //  */
  // editUser(user: IUser): Observable<IUser> {
  //   return this.http.patch<IUser>(`${this.url}/users`, user);
  // }




}
