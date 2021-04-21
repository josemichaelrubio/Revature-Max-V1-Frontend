import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class GroupDataService {

  associates: User[] = [];

  batchId: any = sessionStorage.getItem("userBatchId");
  token: any = sessionStorage.getItem("token");

  batchUrl: string = `http://20.185.67.43/batches/${this.batchId}`;
  batchAssociatesUrl: string = `http://20.185.67.43/batches/1/associates`;

  httpOptions = {
    headers: new HttpHeaders({"Authorization": this.token})
  };

  constructor(private http: HttpClient) { }

  getAllAssociates(): Observable<User[]>{
    return this.http.get<User[]>(this.batchAssociatesUrl)
  }

  addAssociates(associates: User[]): Observable<User[]>{
    return this.http.post<User[]>(this.batchAssociatesUrl, associates, this.httpOptions);
  }

}
