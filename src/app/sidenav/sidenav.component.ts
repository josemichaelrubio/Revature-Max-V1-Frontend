import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

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
