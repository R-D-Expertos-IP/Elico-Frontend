import { Routes } from '@angular/router';
import { HomeComponent } from '../../modules/admin/home/home.component';
import { HomeModule } from '../../modules/commerce/home/home.module';
//import { AdminGuard } from 'src/app/authentication/guard/admin.guard';
//import { InicioComponent } from 'src/app/componentes/inicio/inicio.component';
export const content: Routes = [
  {
    path: '',
    component: HomeComponent,
    loadChildren: () => import('../../modules/admin/home/home.module').then(m => m.HomeModule)
  },
   {
    path: '',
    component: HomeModule,
    loadChildren: () => import('../../modules/commerce/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'users',
    loadChildren: () => import('../../modules/admin/users/users.module').then(m => m.UsersModule)
   // canActivate: [AdminGuard]
  },



  {
    path: '',
    redirectTo: '/commerce/home/start',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/commerce/home/start',
    pathMatch: 'full'
  }
];
