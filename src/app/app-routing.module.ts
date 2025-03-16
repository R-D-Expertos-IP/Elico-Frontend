import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { content } from './shared/routes/content-routes';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/authentication/login',
  },
  {
    path: 'gestiones',
    component: SidebarComponent,
    children: content,
   // canActivate: [AuthenticationGuard],

  },
  {
    path: 'authentication',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
