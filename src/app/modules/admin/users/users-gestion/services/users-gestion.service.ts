import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,  catchError, map, throwError } from 'rxjs';
import { IUser } from '../interface/users-gestion.interface';
import { environment } from '../../../../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UsersGestionService {



  private url = environment.endpoint

  constructor(private http: HttpClient) { }


  // /**
  //  * metodo para traer los usuarios
  //  * @returns Array<IUser>
  //  */
  // public users(): Observable<Array<IUser>> {
  //   return this.http.get<Array<IUser>>(`${this.url}/users`)
  // }


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
