import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from '../auth/pages/sidebar/sidebar.component';
import { NavbarComponent } from '../auth/pages/navbar/navbar.component';




@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
   
  ]
})
export class ProtectedModule { }
