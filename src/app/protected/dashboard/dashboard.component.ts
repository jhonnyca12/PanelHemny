import { Usuario } from './../../auth/pages/interfaces/interfaces';
import { AuthService } from './../../auth/services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface sideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
 // styles: [
   // `
   // *{
   //   margin: 15px;
   // }`
 // ]
})
export class DashboardComponent {
  get usuario(){
    return this.authService.usuario;
  }

  

  constructor(private router: Router,
              private authService: AuthService) {
    
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }

  isSideNavCollapsed = false;
  screenWidth = 0;
  onToggleSideNav(data: sideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;

  }
 
}
