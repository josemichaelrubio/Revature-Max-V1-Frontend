import { Component, OnInit} from '@angular/core';
import { take } from 'rxjs/operators';
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

  topic!: Topic;
  competency!: number | null;
  starredNotesId!: number | null;
  notes = new Array<Notes>();

  constructor(private topicService: TopicService) { }

  ngOnInit(): void {
    this.topicService.getTopicDTO().pipe(take(1)).subscribe( res => { 
      this.topic = res.topic;
      this.competency = res.competency;
      this.starredNotesId = res.starredNotesId;
      this.notes = res.notes;
    });
  }

  updateCompetency(): void {
    let employeeTopic = { "competency": this.competency, "favNotes": this.starredNotesId };
    this.topicService.setEmployeeTopic(JSON.stringify(employeeTopic));
  }

  updateStarredNotesId(notesSelected: Notes): void {
    if (this.starredNotesId == notesSelected.id) {
      this.starredNotesId = null;
      notesSelected.timesStarred--;
    } else {
      if (this.starredNotesId !== null) {
        this.notes.find(i => i.id == this.starredNotesId)!.timesStarred--;
      }
      this.starredNotesId = notesSelected.id;
      notesSelected.timesStarred++;
    }
    let employeeTopic = { "competency": this.competency, "favNotes": this.starredNotesId };
    this.topicService.setEmployeeTopic(JSON.stringify(employeeTopic));
  }

  updateNotes(userNotes: Notes): void {
    let o = { "id": userNotes.id, "topic": { "id": this.topicService.selectedTopicId }, "notes": userNotes.content };
    this.topicService.setNotes(JSON.stringify(o));
  }

}

