import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

loginUrl: string = environment.baseUrl+"/login";

constructor(private http: HttpClient) {
}

attemptLogin(email: string,password: string):Observable<any>{
const payload = `email=${email}&password=${password}` //
return this.http.post(this.loginUrl, payload, {observe:"response"}); //form parameters
}
}
