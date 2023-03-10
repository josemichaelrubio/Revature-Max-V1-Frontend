import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TopicDTO } from '../models/topic-dto'
import { environment } from '../../environments/environment';
import { Topic } from 'app/models/topic';
import { Tag } from 'app/models/tag';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  
  selectedTopicId: number = 0;

  constructor(private http: HttpClient) {}

  getTopicDTO(): Observable<TopicDTO> {
    let batchId = sessionStorage.getItem("userBatchId");
    let headers = new HttpHeaders({'Authorization': sessionStorage.getItem('token') || ''});
    return this.http.get<TopicDTO>(environment.baseUrl+`/batches/${batchId}/topics/${this.selectedTopicId}`,
      { headers: headers });
  }

  setEmployeeTopic(employeeTopic: string) : Observable<any> {
    let user = JSON.parse(sessionStorage.getItem('user') || '');
    let headers = new HttpHeaders({'Authorization': sessionStorage.getItem('token') || '', 'Content-Type': 'application/json'});
    return this.http.put(environment.baseUrl+`/employees/${user.id}/topics/${this.selectedTopicId}`, employeeTopic,
      { headers: headers });
  }

  setNotes(notes: string) : Observable<any> {
    let user = JSON.parse(sessionStorage.getItem('user') || '');
    let headers = new HttpHeaders({'Authorization': sessionStorage.getItem('token') || '', 'Content-Type': 'application/json'});
    return this.http.put(environment.baseUrl+`/employees/${user.id}/notes`, notes, { headers: headers });
  }

  getAllTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(environment.baseUrl+`topics`);
  }

  getAllTags(): Observable<Tag[]>{
    return this.http.get<Tag[]>(environment.baseUrl+'topics/tags');
  }

}

