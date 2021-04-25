import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TopicDTO } from '../models/topic-dto'

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private hostURL: string = 'http://localhost:8082';
  selectedTopicId: number = 0;

  constructor(private http: HttpClient) {}

  httpOptions = {headers: new HttpHeaders({"Authorization": 'eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2MTkxMjgxMTQsImp0aSI6IjE2Iiwic3ViIjoiSU5TVFJVQ1RPUiJ9.KC_SPkpPJR6ah1Yv1-AWu6JmJX2qy2Ur92ob3bWRoQdcEFhO9oSWxcAUyKVWtdChrza61eQNKMKbLJkxhWM1KA'})};

  getTopicDTO(): Observable<TopicDTO> {
    let batchId = 1; //sessionStorage.getItem("userBatchId");
    let headers = new HttpHeaders();
    headers.set('Authorization', 'eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2MTkxMjgxMTQsImp0aSI6IjE2Iiwic3ViIjoiSU5TVFJVQ1RPUiJ9.KC_SPkpPJR6ah1Yv1-AWu6JmJX2qy2Ur92ob3bWRoQdcEFhO9oSWxcAUyKVWtdChrza61eQNKMKbLJkxhWM1KA'); //sessionStorage.getItem('token') || '');
    return this.http.get<TopicDTO>(`${this.hostURL}/batches/${batchId}/topics/${this.selectedTopicId}`, this.httpOptions);
  }

  setEmployeeTopic(employeeTopic: string) : Observable<any> {
    let user = JSON.parse(sessionStorage.getItem('user') || '');
    let headers = new HttpHeaders();
    headers.set('Authorization', sessionStorage.getItem('token') || '');
    return this.http.put(`${this.hostURL}/employees/${user.id}/topics/${this.selectedTopicId}`, employeeTopic,
      { headers: headers });
  }

  setNotes(notes: string) : Observable<any> {
    let user = JSON.parse(sessionStorage.getItem('user') || '');
    let headers = new HttpHeaders();
    headers.set('Authorization', sessionStorage.getItem('token') || '');
    return this.http.put(`${this.hostURL}/employees/${user.id}/notes`, notes, { headers: headers });
  }

}

