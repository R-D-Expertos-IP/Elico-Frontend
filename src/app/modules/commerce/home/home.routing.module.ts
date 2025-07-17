import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { WeCompanyComponent } from './components/we-company/we-company.component';
import { StartComponent } from './components/start/start.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { PqrsfComponent } from './components/pqrsf/pqrsf.component';
import { EnergyComponent } from './components/energy/energy.component';
import { DigitizationComponent } from './components/digitalization/digitalization.component';


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

      {
        path: 'contact',
        component: ContactComponent,
      },

      {
        path: 'resources',
        component: ResourcesComponent,
      },

      {
        path: 'blog',
        component: BlogComponent,
      },

      {
        path: 'pqrsf',
        component: PqrsfComponent,
      },

      {
        path: 'energy',
        component: EnergyComponent,
      },
      
      {
        path: 'digitization',
        component: DigitizationComponent,
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRouterModule { }
