import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from '../auth/pages/home/home.component';
import { ArticleComponent } from '../auth/pages/article/article.component';
import { EmployeesComponent } from '../auth/pages/employees/employees.component';
import { LocationComponent } from '../auth/pages/location/location.component';
import { SettingsComponent } from '../auth/pages/settings/settings.component';
import { CustomersComponent } from '../auth/pages/customers/customers.component';

const routes: Routes = [

  {
    path: '', 
    children: [
      {
        path: '', component: DashboardComponent,
        children: [
          { path: 'home', component: HomeComponent },
          { path: 'article', component: ArticleComponent },
          { path: 'employees', component: EmployeesComponent },
          { path: 'location', component: LocationComponent },
          { path: 'settings', component: SettingsComponent },
          { path: 'customers', component: CustomersComponent },
          { path: '', pathMatch: 'full', redirectTo: '/dashboard/home' },
        ]
      },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
