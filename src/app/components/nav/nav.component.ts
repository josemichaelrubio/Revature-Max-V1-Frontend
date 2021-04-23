import { LoginResponse } from './../../models/login-response';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  repsonse!: LoginResponse;
  isLoggedIn = false;
  isLoggedOut= false;


  isTrainer = false;

  isAssigned = false;

  isVerified = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }




  loggedIn(){
    if(sessionStorage.getItem("token")!== null){
      this.isLoggedIn = true;
      // this.isLoggedOut = true;
    }
    else{
      this.isLoggedIn = false;
      // this.isLoggedOut = false;

    }

  }

  clearSessionStorage(){
    if(sessionStorage.getItem("token")===null){
      // this.isLoggedOut = false;
      this.isLoggedIn = true;
    }
    else{
      this.isLoggedIn=false;
      // this.isLoggedOut =true;
      return sessionStorage.clear();
    }
    }

}
