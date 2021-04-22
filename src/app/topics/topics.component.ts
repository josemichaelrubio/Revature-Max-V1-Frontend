import { Component, OnInit, OnDestroy } from '@angular/core';
import { take } from 'rxjs/operators';
import { TopicService } from '../services/topic.service';
import { Topic } from '../models/topic'
import { Notes } from '../models/notes';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  topic!: Topic;
  competency!: number;
  starredNotesId!: number;
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
    //employeeTopic = 
  }

  updateStarredNotesId(): void {

  }

  updateNotes(): void {

  }

}
