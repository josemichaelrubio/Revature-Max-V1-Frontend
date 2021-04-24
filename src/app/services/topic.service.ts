import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TopicDTO } from '../models/topic-dto'
import { Notes } from '../models/notes'

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private hostURL: string = 'localhost:8082';
  selectedTopicId: number = 0;

  constructor(private http: HttpClient) {}

  getTopicDTO(): Observable<TopicDTO> {
    let batchId = sessionStorage.getItem("userBatchId");
    let headers = new HttpHeaders();
    headers.set('Authorization', sessionStorage.getItem('token') || '');
    return this.http.get<TopicDTO>(`${this.hostURL}/batches/${batchId}/topics/${this.selectedTopicId}`, { headers: headers });
  }

  setEmployeeTopic(employeeTopic: string) {
    let user = JSON.parse(sessionStorage.getItem('user') || '');
    let headers = new HttpHeaders();
    headers.set('Authorization', sessionStorage.getItem('token') || '');
    this.http.put(`${this.hostURL}/employees/${user.id}/topics/${this.selectedTopicId}`, employeeTopic,
      { headers: headers });
  }

  setNotes(notes: string) {
    let user = JSON.parse(sessionStorage.getItem('user') || '');
    let headers = new HttpHeaders();
    headers.set('Authorization', sessionStorage.getItem('token') || '');
    this.http.put(`${this.hostURL}/employees/${user.id}/notes`, notes, { headers: headers });
  }

}
