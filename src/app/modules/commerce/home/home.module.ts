import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioRouterModule } from './home.routing.module';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    InicioRouterModule,
    FormsModule,
    SharedModule,
    


  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class HomeModule { }
