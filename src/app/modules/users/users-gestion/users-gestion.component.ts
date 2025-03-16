import { Component, OnInit } from '@angular/core';
// import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';
import { UsersGestionService } from './services/users-gestion.service';
import { IUser } from './interface/users-gestion.interface';
import { ErrorService } from '../../../shared/services/error.service';
// import { SweetAlertService } from '../../../shared/services/sweetAlert.service';
import { IPermisionValue, IPermissionAction } from '../../../shared/interface/permission.interface';
import { PermissionService } from '../../../shared/services/permission.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-users-gestion',
  templateUrl: './users-gestion.component.html',
  styleUrls: ['./users-gestion.component.css'],
})
export class UsersGestionComponent implements OnInit {
  // private bsModalRef: BsModalRef;
  public users: Array<IUser> = []



  // paginador
  public nPaginas = [5, 10, 20, 50, 100];
  public page: number = 1;
  public totalPaginas = 5;

  // buscador
  public searchTerm: string = '';

  //permisos
  // public permission: IPermissionAction;
  // public permisionBoolean: IPermisionValue;


  constructor(
    // private modalService: BsModalService,
    public toast: ToastrService,
    private errorService: ErrorService,
    // private sweetAlertService: SweetAlertService,
    private usersGestionService: UsersGestionService,
    private PermissionService: PermissionService,
  ) {
    // this.PermissionService.getPermissions('users-gestion');
    // this.permisionBoolean = this.PermissionService.permisionBoolean;
  }

  /**
   * metodo de carga de datos de angular
   */
  ngOnInit(): void {
    this.cargarDatos();
  }

  async cargarDatos() {


  }



  //  * metodo para crear un user
  //  * @param user
  //  */
  newUser() {

  }

  /**
  * metodo para editar un user
  * @param user
  */
  editUser(user: IUser) {

  }

  // /**
  //  * metodo para cambiar el estado de un usuario
  //  * @param id
  //  */
  async states(id): Promise<void> {
    // if (await this.sweetAlertService.alertStatesMessage()) {
    //   await firstValueFrom(this.usersGestionService.cambiarEstadosByidUser(id)).then(_ => {
    //     this.toast.success('Estado cambiado correctamente', 'Usuario ');
    //     this.cargarDatos();
    //   }, err => {
    //     const errorObject = this.errorService.showNotification(err);
    //     this.toast[errorObject.typeToast](errorObject.message, errorObject.typeMessage, { timeOut: errorObject.timeOut });
    //   }
    //   );
    // }
  }



  /**
   * metodo del pagindor
   * @param $event
   */
  numeroPaginas($event: any) {
    const { value } = $event.target;
    this.totalPaginas = value;
    this.page = 1;
  }


  set buscador(value: string) {
    this.searchTerm = value;
    this.page = 1;
  }

  get buscador(): string {
    return this.searchTerm;
  }

  /**
   * metodo para el buscador
   * @returns
   */
  filtroUsers() {
    if (!this.buscador) {
      return this.users;
    }
    return this.users.filter(
      (item) =>
        item.name.toLowerCase().includes(this.buscador.toLowerCase())
    );
  }




}
