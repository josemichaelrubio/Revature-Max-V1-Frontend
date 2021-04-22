import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeInfo } from '../models/employee-info';

@Injectable({
  providedIn: 'root'
})
export class AssociateDataService {

  token: string ='eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2MTkwMzc1MDcsImp0aSI6IjE2Iiwic3ViIjoiSU5TVFJVQ1RPUiJ9.XqfhhyZqjxSS_jR4vVryuHiVr7s9Ndrg0l5nJ9LWcffJYkbxcYCzzMgAlIOnMZwfE-SQbqMHVd0fFBdqLIgbpw';

  associatesUrl: string = `http://20.185.67.43/employees/2`;

  httpOptions = {
    headers: new HttpHeaders({"Authorization": this.token})
  };

  constructor(private http: HttpClient) { 
    
  }
  getEmployeeInfo():Observable<EmployeeInfo>{
      return this.http.get<EmployeeInfo>(this.associatesUrl, this.httpOptions);
    }
}
