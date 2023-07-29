import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';


interface sideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',
          keyframes([
            style({transform: 'rotate(0deg)', offset: '0'}),
            style({transform: 'rotate(720deg)', offset: '1'})
          ])
        )
      ])
    ])
  ]
})
export class SidebarComponent implements OnInit  {

@Output() onToggleSideNav: EventEmitter<sideNavToggle> = new EventEmitter();
collapsed = false;
screenWidth = 0;
navData = navbarData;

@HostListener('window:resize', ['$event'])
  onResize(event: any) {
     this.screenWidth = window.innerWidth;
     if(this.screenWidth <= 760){
       this.collapsed = false; 
       this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
   }

}

 ngOnInit(): void {
     this.screenWidth = window.innerWidth;
 }


toggleCollapse(): void {
  this.collapsed = !this.collapsed;
  this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
}


closeSidenav(): void {
  this.collapsed = false;
  this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
  
}



}

