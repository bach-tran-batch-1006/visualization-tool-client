import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName: string = ""
  lastName: string = ""
  password: string = ""
  confirmPass: string = ""
  email: string = ""
  error: boolean=false;
//private (customerService:CustomerService, private router:Router)
  constructor() {}

  signUp():void{
    alert("New Registration Submission Clicked")
    if(this.password === this.confirmPass){

    }
//=======================================================================================================
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


    this.firstName = ""
    this.lastName = ""
    this.password = ""
    this.confirmPass = ""
    this.email = ""
  
  }
  


  ngOnInit(): void {
  }

}