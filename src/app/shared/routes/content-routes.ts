import { Routes } from '@angular/router';
import { HomeComponent } from '../../modules/home/home.component';
//import { AdminGuard } from 'src/app/authentication/guard/admin.guard';
//import { InicioComponent } from 'src/app/componentes/inicio/inicio.component';
export const content: Routes = [
  {
    path: '',
    component: HomeComponent,
    loadChildren: () => import('../../modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'users',
    loadChildren: () => import('../../modules/users/users.module').then(m => m.UsersModule)
   // canActivate: [AdminGuard]
  },



  {
    path: '',
    redirectTo: '/gestiones/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/gestiones/home',
    pathMatch: 'full'
  }
];
