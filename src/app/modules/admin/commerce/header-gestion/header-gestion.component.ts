import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';
import { ErrorService } from '../../../../shared/services/error.service';
// import { SweetAlertService } from '../../../shared/services/sweetAlert.service';
import { IPermisionValue } from '../../../../shared/interface/permission.interface';
import { PermissionService } from '../../../../shared/services/permission.service';
import { environment } from '../../../../../environments/environment';
import { HeaderGestionService } from './services/header-gestion.service';
import { IHeader } from './interface/header-gestion.interface';
import { Router } from '@angular/router';
import { EditHeaderModulesComponent } from './components/edit-header-modules/edit-header-modules.component';

@Component({
  selector: 'app-header-gestion',
  templateUrl: './header-gestion.component.html',
  styleUrls: ['./header-gestion.component.css'],
})
export class HeaderGestionComponent implements OnInit {
  private bsModalRef: BsModalRef;
  public header: Array<IHeader> = []

  // paginador
  public nPaginas = [5, 10, 20, 50, 100];
  public page: number = 1;
  public totalPaginas = 5;

  // buscador
  public searchTerm: string = '';

  constructor(
    private modalService: BsModalService,
    public toast: ToastrService,
    private errorService: ErrorService,
    // private sweetAlertService: SweetAlertService,
    private headerGestionService: HeaderGestionService,
    private PermissionService: PermissionService,
     private router: Router,
  ) {
  }

  /**
   * metodo de carga de datos de angular
   */
  ngOnInit(): void {
    this.cargarDatos();
  }

  async cargarDatos() {
  await firstValueFrom(this.headerGestionService.header()).then(headerBack => {
      this.header = headerBack
      console.log(headerBack, "este es el header");
      
    }, err => {
      const errorObject = this.errorService.showNotification(err);
      this.toast[errorObject.typeToast](errorObject.message, errorObject.typeMessage, { timeOut: errorObject.timeOut });
    })

  }


  /**
   * metodo para editar un Contrato
   * @param header
   */
  editHeader(header: IHeader) {
    this.bsModalRef = this.modalService.show(EditHeaderModulesComponent, { backdrop: 'static', class: 'modal-lg p-5', });
    this.bsModalRef.content.title = 'Editar Módulo Header';
    this.bsModalRef.content.header = header;
    this.bsModalRef.onHidden?.subscribe((_) => {
      this.cargarDatos();
    });
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
  filtroHeader() {
    if (!this.buscador) {
      return this.header;
    }
    return this.header.filter(
      (item) =>
        item.name.toLowerCase().includes(this.buscador.toLowerCase())
    );
  }
}
