import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { WeCompanyComponent } from './components/we-company/we-company.component';
import { StartComponent } from './components/start/start.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [

     {
       path: 'we-company',
       component: WeCompanyComponent,
     },

      {
       path: 'start',
       component: StartComponent,
     },
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRouterModule { }
