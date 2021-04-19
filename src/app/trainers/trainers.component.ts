import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showCalendar = false;

  showBatch = false;

  showAverage = false;

  goClicked: boolean = false;

  tabOpened: boolean = false;

  clickGo(){
    this.goClicked=true;
  }

  openSideBar(){
    this.tabOpened=true;
  }
  closeSideBar(){
    this.tabOpened=false;
  }

}