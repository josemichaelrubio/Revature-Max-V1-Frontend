import { taggedTemplate } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup  } from '@angular/forms';
import { Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/angular';
import { Curriculum } from 'app/models/curriculum';
import { Tag } from 'app/models/tag';
import { Topic } from 'app/models/topic';
import { CurriculumService } from 'app/services/curriculum.service';
import { TopicService } from 'app/services/topic.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {

  showDayModal: boolean = false;
  showEditButton: boolean = false;
  curriculum: Curriculum[] = [];
  formData!: FormGroup;
  formRemoveData!: FormGroup;
  day!:string;
  topicTitle!: string;
  tagList: Tag[] = [];
  topicList: Topic[] = [];
  tagIdBind!: string;
  topicNameClick!: string;
  topicIdClick!: string;
  topicTagId!: string;
  techId!: any;
  events = [
    { id: "0", title: 'Start Date', date: '2021-03-01', tag: "0" }
  ];

  @ViewChild("content") private contentRef!: TemplateRef<Object>;

  constructor(private topicService: TopicService, private router: Router, private curriculumService: CurriculumService) {
    curriculumService.getCurriculumDays().subscribe((data)=>{
      this.curriculum=data;
      for(let curDay of this.curriculum){
        if(curDay.topics!=null){
          for(let topic of curDay.topics){
          this.events.push({ id: `${topic.id}`, title: topic.name, date: curDay.date, tag: `${topic.tag.id}`});
          }        
        }      
      }
      this.calendarOptions.events = this.events;
    },
    (err)=>console.log(err),
    ()=>{
      console.log('yay curriculum');
    });

    topicService.getAllTopics().subscribe((data)=>this.topicList=data);
   }

  ngOnInit(): void {
    this.formData = new FormGroup({
      topicName: new FormControl("Topic"),
      eventDay: new FormControl("Day")
    });
    this.formRemoveData = new FormGroup({
      topicName: new FormControl(this.topicNameClick),
      topicId: new FormControl(this.topicIdClick)
    });
  }
  handleDateClick(arg: any) {
    // alert('date click! ' + arg.dateStr)
    this.day = arg.dateStr
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    eventClick: this.handleEventClick.bind(this),
    editable: true,
    selectable: true,
    selectMirror: true,
    weekends: false // initial value
  };

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  }

  handleEventClick(arg:any){
    this.topicIdClick = arg.event._def.sourceId;
    this.topicNameClick = arg.event._def.title;
    this.topicTagId = arg.event._def.extendedProps.tag;
  }

  loadTags(){
    this.topicService.getAllTags().subscribe((data)=>this.tagList = data);
  }

  loadTopics(){
    console.log("loadTopicsMethod");
    this.topicService.getAllTopics().subscribe((data)=>this.topicList = data);
    
    this.topicList=this.topicList.filter((topic)=>topic.tag.id == this.techId);
    console.log()
    console.log(this.topicList);
  }


  saveTopic(topic:any){
    this.topicIdClick = topic.id;
  }
  
}
