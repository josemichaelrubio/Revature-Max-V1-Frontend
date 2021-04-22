import { User } from './../models/user';
import { LoginResponse } from './../models/login-response';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable, PLATFORM_INITIALIZER } from '@angular/core';
import { BehaviorSubject, pipe } from 'rxjs';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, tap } from  'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

loginUrl: string = environment.baseUrl+"/login";
authSubject = new BehaviorSubject(false);// tracks the user's authorization state
token: string | null | undefined;
httpOptions =  { headers : new HttpHeaders({"Content-Type":"application/x-www-form-urlencoded"})};

constructor(private http: HttpClient) {
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

// setToken(token: string | null | undefined): void {
//   this.token = token;
// }
}
