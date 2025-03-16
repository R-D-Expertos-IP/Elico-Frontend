import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserRouterModule } from './users.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { UsersGestionComponent } from './users-gestion/users-gestion.component';
import { UsersGestionService } from './users-gestion/services/users-gestion.service';
import { NgxPaginationModule } from 'ngx-pagination';




@NgModule({
  imports: [
    CommonModule,
    UserRouterModule,
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
    UsersComponent,
    UsersGestionComponent,
  ],
  providers: [
    UsersGestionService,
  ]

})
export class UsersModule { }
