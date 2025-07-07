import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioRouterModule } from './home.routing.module';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WeCompanyComponent } from './components/we-company/we-company.component';
import { BlogComponent } from './components/blog/blog.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { StartComponent } from './components/start/start.component';
import { ContactComponent } from './components/contact/contact.component';
import { PqrsfComponent } from './components/pqrsf/pqrsf.component';


@NgModule({
  imports: [
    CommonModule,
    InicioRouterModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
    


  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    WeCompanyComponent,
    StartComponent,
    BlogComponent,
    ResourcesComponent,
    ContactComponent,
    PqrsfComponent
  ]
})
export class HomeModule { }
