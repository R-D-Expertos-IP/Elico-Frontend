import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { content } from './shared/routes/content-routes';
import { HeaderComponent } from './modules/commerce/home/components/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/commerce/home',
  },
  {
    path: 'gestiones',
    component: SidebarComponent,
    children: content,
   // canActivate: [AuthenticationGuard],

  },
  {
    path: 'commerce',
    loadChildren: () => import('./modules/commerce/home/home.module').then(m => m.HomeModule),
  },
  //  {
  //   path: 'authentication',
  //   loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule),
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
