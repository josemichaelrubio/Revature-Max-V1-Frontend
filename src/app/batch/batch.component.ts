import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {

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
