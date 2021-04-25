import { Component, OnInit} from '@angular/core';
import { take, filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { TopicService } from '../services/topic.service';
import { Topic } from '../models/topic';
import { Notes } from '../models/notes';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  userId = JSON.parse(sessionStorage.getItem("user")!).id;
  userName = JSON.parse(sessionStorage.getItem("user")!).name;

  topic!: Topic;
  competency: number | null = null;
  starredNotesId: number | null = null;
  notes = new Array<Notes>();

  constructor(private router: Router, private topicService: TopicService) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: any) => {
      if (event.url == '/topics') {
        this.ngOnInit();
      }
    });
  }

  ngOnInit(): void {
    this.topicService.getTopicDTO().subscribe(
      (res) => { 
        this.topic = res.topic;
        this.competency = res.competency || 0;
        this.starredNotesId = res.starredNotesId;
        this.notes = res.notes;
        let userNotesPresent = false;
        for (let n of this.notes) {
          if (n.employee.id == this.userId) {
            userNotesPresent = true;
            break;
          }
        }
        if (!userNotesPresent) {
          this.notes.push({ notesId: null, employee: { id: this.userId, name: this.userName }, timesStarred: 0, content: "" });
        }
      }, (err) => {
        console.log(err);
      }
    );
  }

  updateCompetency(): void {
    let employeeTopic = { "competency": this.competency, "favNotes": this.starredNotesId };
    this.topicService.setEmployeeTopic(JSON.stringify(employeeTopic)).pipe(take(1)).subscribe(
      (res) => {},
      (err) => {
        console.log(err);
      }
    );
  }

  updateStarredNotesId(notesSelected: Notes): void {
    let employeeTopic = { "competency": this.competency, "favNotes": this.starredNotesId };
    this.topicService.setEmployeeTopic(JSON.stringify(employeeTopic)).pipe(take(1)).subscribe(
      (res) => {
        if (this.starredNotesId == notesSelected.notesId) {
          this.starredNotesId = null;
          notesSelected.timesStarred--;
        } else {
          if (this.starredNotesId !== null) {
            this.notes.find(i => i.notesId == this.starredNotesId)!.timesStarred--;
          }
          this.starredNotesId = notesSelected.notesId;
          notesSelected.timesStarred++;
        }
      }, (err) => {
        console.log(err);
      }
    );
  }

  updateNotes(userNotes: Notes): void {
    let o = { "id": userNotes.notesId ? userNotes.notesId : null, "topic": { "id": this.topicService.selectedTopicId }, "notes": userNotes.content };
    this.topicService.setNotes(JSON.stringify(o)).pipe(take(1)).subscribe(
      (res) => {
        if (!userNotes.notesId) {
          if (!res) {
            userNotes.notesId = null;
          } else {
            userNotes.notesId = res;
          }
        }
      }, (err) => {
        console.log(err);
      }
    );
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

}
