import { LoginResponse } from './../models/login-response';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string= "";
  message: string = "";
  response!: LoginResponse;

  constructor(private authService: AuthService, private router: Router) { } //for all of our services, we want to do dependency injection

  // login(){

  //   this.authService.attemptLogin(this.email,this.password).subscribe((res)=>{
  //     console.log("Logged in!");
  //     sessionStorage.setItem("token",this.response._token)
  //     this.router.navigateByUrl("home");
  //   })
  // }

  login(){


    this.authService.attemptLogin(this.email,this.password).subscribe(
      (res)=>{
        this.message = "Successful login";
        this.response = res;


    },
    (res)=>{this.message = res.error.title;
    },
    ()=>{

      sessionStorage.setItem("token",this.response.token);
      sessionStorage.setItem("user", JSON.stringify(this.response.user));

      if(this.response.userBatchId== null){
        this.router.navigateByUrl("associates");
      };

      sessionStorage.setItem("userBatchId", this.response.userBatchId.toString());

      if(this.response.user.role == "INSTRUCTOR"){
        this.router.navigateByUrl("trainers");
      }else{
        this.router.navigateByUrl("batch");
      }
    })
  }
  ngOnInit(): void {
  }


}
