import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeInfo } from '../models/employee-info';
import { environment } from 'environments/environment';
import { User } from 'app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AssociateDataService {

  token: string = sessionStorage.getItem("token") || '';
  emp: User = JSON.parse(sessionStorage.getItem("user")||'');
  empID: number = this.emp.id;

  associatesUrl: string = environment.baseUrl+`/employees/2`;

  httpOptions = {
    headers: new HttpHeaders({"Authorization": this.token})
  };

  constructor(private http: HttpClient) { 
    
  }
  getEmployeeInfo():Observable<EmployeeInfo>{
      return this.http.get<EmployeeInfo>(this.associatesUrl, this.httpOptions);
    }
}
