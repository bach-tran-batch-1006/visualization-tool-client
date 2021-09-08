import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string='';
  password: string='';
  error: boolean=false;


  constructor(private userService:UserService, private router:Router) { }

  
  login(): void{
    console.log(this.email, this.password);
    this.userService.login(this.email,this.password)
      .subscribe(data=>{this.userService.user = {
        id: data.id,
        email: data.email
        //localStorage.setItem("")
      }
      localStorage.setItem('userId',`${data.id}`)
      localStorage.setItem('email',`${data.email}`);
      this.error=false; 
      this.router.navigateByUrl('/index');
      
      
      //console.log(data.userId);
    },
      (error)=>this.error=true); 
  }

  ngOnInit(): void {
  }

}
