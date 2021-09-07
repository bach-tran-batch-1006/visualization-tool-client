import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  //styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  first: string = "";
  last: string = "";
  pass: string = "";
  confirmPass: string = "";


  email: string = localStorage.getItem('email');
  userId: number = parseInt(localStorage.getItem('userId'));
  error: boolean = false;
  updateProfile() {
    if(this.pass === this.confirmPass && this.pass != null){
    // console.log(this.userId, this.email)
    this.userService.updateUser(this.userId, this.email, this.pass, this.first, this.last)
      .subscribe(data => {
        alert('User Successfully Updated')
       },
        (error) => this.error = true);

  }
}


  showProfile() {
    console.log(this.userId, this.email)
    this.userService.getUserById(this.userId)
      .subscribe(data => {
        this.error = false;
        console.log(data);
        this.first = data.first;
        this.last = data.last
      },
        (error) => this.error = true);
  }



  ngOnInit(): void {
    this.showProfile()

  }

}
