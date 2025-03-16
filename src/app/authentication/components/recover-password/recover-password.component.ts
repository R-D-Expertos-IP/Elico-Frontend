import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../../service/authentication.service';
import { Router } from '@angular/router';
import { ErrorService } from '../../../shared/services/error.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrl: './recover-password.component.css'
})
export class RecoverPasswordComponent implements OnInit {
  /** Login form */
  public loginForm: FormGroup;
  /** boleanos para la carga de datos */
  public booleanCode: boolean = false
  public booleanNewPass: boolean = false
  public booleanEmail: boolean = false
  public booleanButtonEmail: boolean = false

  constructor(
    public toast: ToastrService,
    public authenticationService: AuthenticationService,
    private router: Router,
    private errorService: ErrorService
  ) { }

  ngOnInit(): void {
    this.booleanEmail = true
    this.buildForm();
  }

  /**
   * Metodo que contruye los formularios
   * @returns void
   */
  private buildForm(): void {
    this.loginForm = new FormGroup(({
      email: new FormControl(null, [Validators.required, Validators.email]),
      code: new FormControl(null),
      newPassword: new FormControl(null,  [Validators.minLength(6), Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{6,15}$/)]),
      confirmPassword: new FormControl(null),
    }));
  }

  /**
   * metodo para enviar el codigo de verificacion al correo
   */
  sendCode() {
  }

  validateCode() {

  }

  newPassword() {
  }

  exit() {
    this.router.navigate(['/authentication/login']);
  }

}
