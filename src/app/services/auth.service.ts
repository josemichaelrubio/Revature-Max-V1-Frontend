import { User } from './../models/user';
import { LoginResponse } from './../models/login-response';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, pipe } from 'rxjs';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map, tap } from  'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl: string = environment.baseUrl+"/login";
  authSubject = new BehaviorSubject(false);// tracks the user's authorization state
  token: string | null | undefined;
  user: any;
  batchId: any;
  httpOptions =  { headers : new HttpHeaders({"Content-Type":"application/x-www-form-urlencoded"})};
  isLoggedIn: boolean = false;
  isTrainer: boolean = false;
  isAssigned: boolean = false;

  constructor(private http: HttpClient, private router:Router) {
  }

  getToken(): any{
    if (this.token==null){
      this.token = sessionStorage.getItem("token");
    }
    return this.token;
  }

  getUser(): any{
    if(this.user==null){
      this.user = sessionStorage.getItem("user");
    }
    return this.user;
  }

  getBatchId(): any{
    if(this.batchId==null){
      this.batchId = +(sessionStorage.getItem("userBatchId") || 0);
    }
    return this.batchId;
  }


  attemptLogin(email: string, password: string ):Observable<LoginResponse>{
    // const payload = `email=${email}&password=${password}`
    // return this.http.post(this.loginUrl, payload, {
    //   headers: {
    //     "Content-Type":"application/x-www-form-urlencoded"
    //   },
    //   observe: 'response'
    // }).pipe(map(res=>{
    //     const token = res.headers.get('token');
    //     this.setToken(token);
    //     const user = res.body as LoginResponse;
    //     return user;


  const payload = `email=${email}&password=${password}`
  // return this.http.post(`${this.loginUrl}`, payload, this.httpOptions)
  // const payload = `email=${email}&password=${password}`
  return this.http.post<LoginResponse>(this.loginUrl,payload, this.httpOptions);//form parameters
  // })).toPromise();
  }

  checkLogin(){
    if(sessionStorage.getItem("token")){
      this.isLoggedIn=true;
    } else{
      this.router.navigateByUrl("/login");
    }
    if(sessionStorage.getItem("userBatchId")){
      this.isAssigned=true;
    }
    if(JSON.parse(sessionStorage.getItem("user")||'').role=="INSTRUCTOR"){
      this.isTrainer=true;
    }
    
  }

  // setToken(token: string | null | undefined): void {
  //   this.token = token;
  // }
}
