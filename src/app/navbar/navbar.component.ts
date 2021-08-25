import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  logout():void{
    alert("Logout Button Clicked");
    //logic for logout here
  }

  constructor() { }

}
