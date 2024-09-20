import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/apiService/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  email:any;
  password:any;
  username:any;
  error:any;
  constructor(private router:Router,private loginService: ApiService){}
  
  register() {
    // Check if the form is valid before proceeding
    if (!this.email) {
      this.error = 'Email are required.';
      return;
    }
    else if(!this.password){
      this.error = 'Password are required.';
      return;
    }
  
    else if(!this.username){
      this.error='Username Is Required.';
    }
  
  
    const req = {
      email: this.email,
      password: this.password,
      username:this.username
    };
    this.loginService.getData("user/register",req).subscribe(response => {
      if (response.statusCode === 0) {
        console.log(response);

        const userDetails={
          email:response.responseContent.user.email,
          username:response.responseContent.user.username,
          userId:response.responseContent.user.id,
          token:response.responseContent.token
        }
        
        localStorage.setItem("user",JSON.stringify(userDetails));
        this.router.navigate(["",'home']);
        console.log("Login Success");
      } else {
        console.log("Login NOT Success");
        this.error=response.errorMessage;
      }
    });
  }
  
  
  isFormValid(): boolean {
    // Check if all required fields are valid
    return this.username && this.email && this.password;
  }


  navigateToRegisterPage() {
    this.router.navigate(["","/"]);
    }
}
