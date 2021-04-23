import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeInfo } from '../models/employee-info';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AssociateDataService {

  token: string = sessionStorage.getItem('token') || '';
  associateId : number = JSON.parse(sessionStorage.getItem("user") || "").id;

  associatesUrl: string = `http://20.185.67.43/employees/${this.associateId}`;

  httpOptions = {
    headers: new HttpHeaders({"Authorization": this.token})
  };

  constructor(private http: HttpClient) { 
    
  }
  getEmployeeInfo():Observable<EmployeeInfo>{
      return this.http.get<EmployeeInfo>(this.associatesUrl, this.httpOptions);
    }
}
