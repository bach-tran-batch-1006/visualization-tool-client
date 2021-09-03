import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  //styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  logout():void{
    localStorage.clear();
    sessionStorage.clear();
    alert("You have been logged out");
    //logic for logout here
  }

  // test_login():void{
  //   localStorage.setItem('name', 'tescaseMcGee');
  // }


  constructor() { }

}
