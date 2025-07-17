import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderGestionService } from './header-gestion/services/header-gestion.service';
import { SharedModule } from '../../../shared/shared.module';
import { HeaderGestionComponent } from './header-gestion/header-gestion.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommerceComponent } from './commerce.component';
import { CommerceRouterModule } from './commerce.routing.module';
import { EditHeaderModulesComponent } from './header-gestion/components/edit-header-modules/edit-header-modules.component';





@NgModule({
  imports: [
    CommonModule,
    CommerceRouterModule,
    // ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    // BsDropdownModule.forRoot(),
    // NgSelectModule,
    NgxPaginationModule,
    //   TooltipModule.forRoot()
  ],
  declarations: [
    CommerceComponent,
    HeaderGestionComponent,
    EditHeaderModulesComponent
  ],
  providers: [
    HeaderGestionService,
  ]

})
export class CommerceModule { }
