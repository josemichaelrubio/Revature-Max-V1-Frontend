import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GroupDataService } from 'app/services/group-data.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit {
  associates: User[] = [];
  errorMessage: string = '';
  successMessage: string = '';

  emails: string[] = [];
  email: string = '';

  formData!: FormGroup;

  editorOpened: boolean = false;

  constructor(private groupData: GroupDataService) {

    groupData.getAllAssociates().subscribe((usersReturned)=>this.associates=usersReturned,
    (err)=>{this.errorMessage = "Could not find any associates for your assigned batch!"});

   }

  ngOnInit(): void {
    this.formData = new FormGroup({
      email: new FormControl("employee@revature.net")
    });
  }

  onClickAddEmail(data: any){
    this.email = data.email;
    this.emails.push(this.email);
  }

  onClickSubmit(){

    for(let email of this.emails){
      this.associates.push(new User(null, email, null, null))
    }

    this.groupData.addAssociates(this.associates).subscribe((empsReturned)=>this.associates=empsReturned, 
    ()=>this.errorMessage='Could not add employees to batch', 
    ()=>this.successMessage = "Employees were added to batch successfully");

    this.groupData.getAllAssociates().subscribe((usersReturned)=>this.associates=usersReturned,
    (err)=>{this.errorMessage = "Could not find any associates for your assigned batch!"});
  }

  openAssignment(){
    this.editorOpened = true;
  }
  
  removeEmp(emp:User){
    console.log("removing associate from batch");
    this.groupData.removeAssociate(emp).subscribe(()=>console.log("removing associate from batch"), ()=>console.log("Some Error"),
     ()=>this.groupData.getAllAssociates().subscribe((usersReturned)=>this.associates=usersReturned,
        (err)=>{this.errorMessage = "Could not find any associates for your assigned batch!"})
    );
  }
  

}
