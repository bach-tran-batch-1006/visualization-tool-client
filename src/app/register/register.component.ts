import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  //styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  

  first: string = ""
  last: string = ""
  pass: string = ""
  confirmPass: string = ""
  email: string = ""
  error: boolean=false;
//private (customerService:CustomerService, private router:Router)
  constructor(private userService:UserService, private router:Router) {}

  signUp():void{
    alert("New Registration Submission Clicked")
    console.log()
    //if(this.pass === this.confirmPass){
      console.log(this.first, this.last, this.email, this.pass)

      this.userService.register(this.first, this.last, this.email, this.pass)
      .subscribe(data=>{this.userService.user = {
        id: data.id,
        email:data.email
      }
      this.error=false;
      this.router.navigateByUrl('/index');
    },
     (error)=>this.error=true);

   // }
    
//======================================================================================================
    // this.customerService.register(this.firstName,this.lastName,this.address,this.city,this.state,this.zipcode,this.email,this.password)
    //   .subscribe(data=>{this.customerService.customer = {
    //     custId: data.custId,
    //     email:this.email
    //   }
    //   this.error=false;
    //   this.router.navigateByUrl('/home-page');
    // },
   //   (error)=>this.error=true);
   //=========================================================================================================


    // this.first = ""
    // this.last = ""
    // this.pass = ""
    // this.confirmPass = ""
    // this.email = ""
  
  }
  


  ngOnInit(): void {
  }

}