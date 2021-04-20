import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  message: string = "";

  constructor(private authService: AuthService, private router: Router) { } //for all of our services, we want to do dependency injection

  ngOnInit(): void {
  }

  login(){

    this.authService.attemptLogin(this.username,this.password).subscribe(
      //if successful
      (res)=>{
        this.message = "Successful login";
        console.log("Successful login");

        console.log(res.headers.get("Authorization"));
        sessionStorage.setItem("token", res.headers.get("Authorization"));


        this.router.navigate(['home']);

    },
    //if it's not successful
    (res)=>{this.message = res.error.title;
    })
  }

}
