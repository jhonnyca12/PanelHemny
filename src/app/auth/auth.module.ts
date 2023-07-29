import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './pages/main/main.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './pages/article/article.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { LocationComponent } from './pages/location/location.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { TableDashboardComponent } from './pages/table-dashboard/table-dashboard.component';
import { ModalTableComponent } from './pages/modals/modal-table/modal-table.component';
//import { NavbarComponent } from './pages/navbar/navbar.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MainComponent,
    HomeComponent,
    ArticleComponent,
    EmployeesComponent,
    LocationComponent,
    SettingsComponent,
    CustomersComponent,
    TableDashboardComponent,
    ModalTableComponent,
    // NavbarComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbDatepickerModule,
    JsonPipe,
  ],
  exports: [HomeComponent],
})
export class AuthModule {}
