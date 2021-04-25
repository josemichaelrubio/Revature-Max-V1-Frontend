import { Batch } from './../models/batch';
import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user';
import { JsonpClientBackend } from '@angular/common/http';

@Component({
  selector: 'app-associates',
  templateUrl: './associates.component.html',
  styleUrls: ['./associates.component.css']
})
export class AssociatesComponent implements OnInit {
  sessionUser: User = JSON.parse(sessionStorage.getItem("user")||'');
  name: string = this.sessionUser.name;
  role: string = this.sessionUser.role;
  email: string = this.sessionUser.email;
  // sessionBatch: Batch = JSON.parse(sessionStorage.getItem(""))
  constructor() {

  }



  ngOnInit(): void {
  }

  dashOpened: boolean = false;

  openDash(){
    this.dashOpened = true;
  }
}
