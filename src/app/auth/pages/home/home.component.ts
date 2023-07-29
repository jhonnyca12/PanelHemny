import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  getBodyClass(): string {
    let styLeClass = '';
    if(this.collapsed && this.screenWidth > 768) {
      styLeClass = 'body-trimned';
    }else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth >0 ){
      styLeClass = 'body-md-screen'

    }
    return styLeClass;
  }

}
