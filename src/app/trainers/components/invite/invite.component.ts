import { Component, OnInit } from '@angular/core';
import { GroupDataService } from 'app/services/group-data.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit {
  associates: User[] = [];
  employees: User[] = [];
  errorMessage: string = '';

  editorOpened: boolean = false;

  constructor(private groupData: GroupDataService) {

    groupData.getAllAssociates().subscribe((usersReturned)=>this.associates=usersReturned,
    (err)=>{this.errorMessage = "Could not find any associates for your assigned batch!"});

   }

  ngOnInit(): void {
  }

  openAssignment(){
    this.editorOpened = true;
  }
  

  

}
