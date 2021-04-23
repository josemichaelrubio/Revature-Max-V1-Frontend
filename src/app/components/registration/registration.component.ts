import { UserRegistration } from './../../models/user-registration';
import { AuthService } from 'app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  name: string ="";
  email: string = "";
  password: string= "";
  message: string = "";
  response!: UserRegistration;

  constructor(private authService: AuthService, private router: Router) { }

  newEmployee(){
    this.authService.registerNewEmployee(this.name,this.email,this.password).subscribe(
      (res)=>{
        this.message = "Welcome to Revature Max "+ this.name + ".";
        this.response = res;
      },
      (res)=> {this.message = res.error.title;
      },
      ()=>{
        if(this.response.email== null ){

          // Input alerts if email, name, and password is null
          console.log("Please input an email")
          this.router.navigateByUrl("employees")
        } else{
          this.router.navigateByUrl("login")
        }

      }
    )

  }

  ngOnInit(): void {
  }

}
