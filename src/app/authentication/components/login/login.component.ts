import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';
import { AuthenticationService } from '../../service/authentication.service';
import { Router } from '@angular/router';
import { ErrorService } from '../../../shared/services/error.service';
// import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  /** Login form */
  public loginForm: FormGroup;
  /** Bandera de se indoca cuando se esta iniciando sesion */
  loadingSession = false;
  /**Mensajes de formulario */
  textIniSesssion = 'Iniciar sesión';


  constructor(
    public toast: ToastrService,
    public authenticationService: AuthenticationService,
    private router: Router,
    private errorService: ErrorService
  ) { }

  /** Ciclo de vida ngOnInit */
  async ngOnInit() {
    localStorage.clear()
    this.buildForm();

  }

  /**
   * Metodo que contruye los formularios
   * @returns void
   */
  private buildForm(): void {
    this.loginForm = new FormGroup(({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    }));
  }

  /**
  * Metodo que hace login al servicio backend
  * @returns void
  */
  login(): void {
    if (this.loginForm.invalid) {
      this.toast.info('Todos los campos son obligatorios', 'Información');
    }
    else {
      this.loadingSession = true;
      this.textIniSesssion = 'Iniciando sesión...';


      // redirecciona al home
      setTimeout(() => {

        this.router.navigate(['gestiones'])
      }, 1500);

    }



  }

}
