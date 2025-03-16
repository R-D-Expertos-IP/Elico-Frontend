import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICustomError } from "../interface/error.service.interface";
@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  private messageObject: ICustomError;
  private timeOut = 5000;
  constructor() {
    this.messageObject = {
      errorCode: '1000',
      message: 'Error desconocido, comunicate con el administrador',
      status: 500,
      typeMessage: 'Desconocido',
      timeOut: this.timeOut,
      typeToast: 'error'
    };
  }

  /**
   * Metodo para el manejo del error y mostrar la respectiva notificacion
   * @param {HttpErrorResponse} error
   * @returns {ICustomError}
   */
  public showNotification(error: HttpErrorResponse): ICustomError {

    const customError: ICustomError = error.error;

    if (customError && customError['statusCode'] == 403 && customError.message == 'Token error: Token error: jwt expired') {
      customError.typeMessage = 'Token expirado';
      customError.timeOut = this.timeOut;
      customError.typeToast = 'info';
      customError.message = 'Token expirado, por favor cierra sesion y vuelve a iniciar'
      this.messageObject = customError;

    }

    switch (error.status) {
      case 400:
        customError.typeMessage = 'Error';
        customError.timeOut = this.timeOut;
        customError.typeToast = 'error';
        this.messageObject = customError;
        break;
    }

    switch (customError && customError.errorCode) {

      case '3001':
        customError.typeMessage = 'Login';
        customError.timeOut = this.timeOut;
        customError.typeToast = 'info';
        this.messageObject = customError;
        break;
      case '3002':
        customError.typeMessage = 'Login';
        customError.timeOut = this.timeOut;
        customError.typeToast = 'info';
        this.messageObject = customError;
        break;
      case '3003':
        customError.typeMessage = 'Login';
        customError.timeOut = this.timeOut;
        customError.typeToast = 'info';
        this.messageObject = customError;
        break;



    }
    return this.messageObject;
  }
}

