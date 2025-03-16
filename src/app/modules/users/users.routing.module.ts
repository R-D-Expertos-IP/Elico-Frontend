import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UsersGestionComponent } from './users-gestion/users-gestion.component';


const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: 'users-gestion',
        component: UsersGestionComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRouterModule { }
