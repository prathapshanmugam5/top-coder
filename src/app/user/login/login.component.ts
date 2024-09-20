import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/apiService/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  email!: string;
  password!: string;
  error!: string;

  constructor(private loginService: ApiService, private router: Router) {}

  logincall() {
    if (!this.email) {
      this.error = 'Email are required.';
      return;
    }
    else if(!this.password){
      this.error = 'Password are required.';
      return;
    }

    const req = {
      email: this.email,
      password: this.password
    };

    this.loginService.getData("user/login",req).subscribe(response => {
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
        console.log('Login Success');
      } else {
        console.log('Login NOT Success');
        this.error =response.errorMessage;
      }
    });
  }


  navigateToRegisterPage() {
    this.router.navigate(["",'register']);
    }

}
