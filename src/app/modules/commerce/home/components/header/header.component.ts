import { Component } from '@angular/core';
// import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';
import { ErrorService } from '../../../../../shared/services/error.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  


  


  constructor(
    // public bsModalRef: BsModalRef,
    public toast: ToastrService,
    private errorService: ErrorService,
  ) {

  }

  /**
   * metodo de carga de datos de angular
   */
  ngOnInit(): void {
   
  }


}
