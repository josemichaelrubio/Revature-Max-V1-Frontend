import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BatchInfoAverages } from '../models/batch-info-averages';

@Injectable({
  providedIn: 'root'
})
export class AverageService {

  batchUrl: string = `http://20.185.67.43/batches/1`;
  token: string ='eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2MTkwMzc1MDcsImp0aSI6IjE2Iiwic3ViIjoiSU5TVFJVQ1RPUiJ9.XqfhhyZqjxSS_jR4vVryuHiVr7s9Ndrg0l5nJ9LWcffJYkbxcYCzzMgAlIOnMZwfE-SQbqMHVd0fFBdqLIgbpw';

  httpOptions = {
    headers: new HttpHeaders({"Authorization": this.token})
  };

  constructor(private http:HttpClient) { }

  getAllAverages(): Observable<BatchInfoAverages>{
    return this.http.get<BatchInfoAverages>(this.batchUrl, this.httpOptions);
  }

}
