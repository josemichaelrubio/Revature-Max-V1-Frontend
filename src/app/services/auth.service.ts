import { UserRegistration } from './../models/user-registration';
import { LoginResponse } from './../models/login-response';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable, PLATFORM_INITIALIZER } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

loginUrl: string = environment.baseUrl+"/login";
registerUrl: string = environment.baseUrl+"employees";
httpOptions =  { headers : new HttpHeaders({"Content-Type":"application/x-www-form-urlencoded"})};

constructor(private http: HttpClient) {
}

attemptLogin(email: string, password: string ):Observable<LoginResponse>{
  const payload = `email=${email}&password=${password}`
  return this.http.post<LoginResponse>(this.loginUrl,payload, this.httpOptions);
}

registerNewEmployee(name: string, email: string, password: string):Observable<UserRegistration>{
  const payload = `name=${name}&email=${email}&password=${password}`
  return this.http.post<UserRegistration>(this.registerUrl,payload,this.httpOptions);
}
}
