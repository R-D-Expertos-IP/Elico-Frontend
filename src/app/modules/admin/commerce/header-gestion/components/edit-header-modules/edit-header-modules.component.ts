// edit-header-modules.component.ts
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';
import { IHeader } from '../../interface/header-gestion.interface';
import { HeaderGestionService } from '../../services/header-gestion.service';
import { ErrorService } from '../../../../../../shared/services/error.service';
import { iconosFontAwesome } from '../../../../../../shared/data/const';

@Component({
  selector: 'app-edit-header-modules',
  templateUrl: './edit-header-modules.component.html',
  styleUrls: ['./edit-header-modules.component.css']
})
export class EditHeaderModulesComponent implements OnInit {
  public title: string;
  public header: IHeader;
  public formHeader: FormGroup;
  public cargarFormularioBooleam: boolean = false;
  public iconos = iconosFontAwesome; 

  constructor(
    public bsModalRef: BsModalRef,
    private headerGestionService: HeaderGestionService,
    private toast: ToastrService,
    private errorService: ErrorService,
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.initForm();
      this.cargarFormularioBooleam = true;
    }, 100);
  }

  initForm() {
    this.formHeader = new FormGroup({
      id: new FormControl(this.header?.id || null),
      name: new FormControl(this.header?.name || '', Validators.required),
      rute: new FormControl(this.header?.rute || '', Validators.required),
      icon: new FormControl(this.header?.icon || '', Validators.required),
    });
  }

  async guardarDatos() {
    if (this.formHeader.invalid) {
      this.toast.info('Debes llenar todos los datos requeridos del formulario', 'Header');
      return;
    }

    const datos = this.formHeader.value;

    try {
      await firstValueFrom(this.headerGestionService.updateHeader(datos));
      this.toast.success('Header actualizado correctamente', 'Header');
      this.bsModalRef.hide();
    } catch (err) {
      const errorObject = this.errorService.showNotification(err);
      this.toast[errorObject.typeToast](errorObject.message, errorObject.typeMessage, {
        timeOut: errorObject.timeOut
      });
    }
  }
}

