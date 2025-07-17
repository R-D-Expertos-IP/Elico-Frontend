import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderGestionComponent } from './header-gestion/header-gestion.component';
import { CommerceComponent } from './commerce.component';


const routes: Routes = [
  {
    path: '',
    component: CommerceComponent,
    children: [
      {
        path: 'header-gestion',
        component: HeaderGestionComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommerceRouterModule { }
