import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavChangeService } from 'app/services/nav-change.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isLoggedIn = false;

  isTrainer = false;

  isAssigned = false;
  constructor(private navService: NavChangeService, private router: Router) {
    navService.navState$.subscribe((state)=>{
      this.isLoggedIn = state;
      if(sessionStorage.getItem("userBatchId")){
        this.isAssigned=true;
      }
      if(JSON.parse(sessionStorage.getItem("user")||'').role=="INSTRUCTOR"){
        this.isTrainer=true;
      }
    });
  }

  ngOnInit(): void {    
  }

  logOut(){
    sessionStorage.clear();
    this.isLoggedIn=false;
    this.isAssigned=false;
    this.isTrainer=false;
    this.router.navigateByUrl("/home");
  }

}