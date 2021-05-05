import { taggedTemplate } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Calendar, CalendarOptions } from '@fullcalendar/angular';
import { BatchDay } from 'app/models/batch-day';
import { Tech } from 'app/models/tech';
import { Topic } from 'app/models/topic';
import { CurriculumService } from 'app/services/curriculum.service';
import { TopicService } from 'app/services/topic.service';
import { filter } from 'rxjs/operators';
import * as jquery from 'jquery';
import { Quiz } from 'app/models/quiz';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css'],
})
export class CurriculumComponent implements OnInit {
  showDayModal: boolean = false;
  showEditButton: boolean = false;
  batchDays: BatchDay[] = [];
  formData!: FormGroup;
  formRemoveData!: FormGroup;
  day!: string;
  topicTitle!: string;
  techList: Tech[] = [];
  fullTopicList: Topic[] = [];
  topicList: Topic[] = [];
  tagIdBind!: string;
  topicNameClick!: string;
  topicIdClick!: string;
  topicTagId!: string;

  events = [{ id: '0', title: 'Start Date', date: '2021-03-01', tech: '0' }];

  @ViewChild('content') private contentRef!: TemplateRef<Object>;

  constructor(
    private topicService: TopicService,
    private router: Router,
    private curriculumService: CurriculumService
  ) {
    curriculumService.getBatchDays().subscribe(
      (data) => {
        this.batchDays = data;
        for (let curDay of this.batchDays) {
          if (curDay.topics != null) {
            for (let topic of curDay.topics) {
              this.events.push({
                id: `${topic.id}`,
                title: topic.name,
                date: curDay.date,
                tech: `${topic.tech.id}`,
              });
            }
          }
          // add quiz / qc
          if (curDay.quiz) {
            this.events.push({
              id: `${curDay.quiz.id}`,
              title: curDay.quiz.name,
              date: curDay.date,
              tech: '-1',
            });
          }
        }
        this.calendarOptions.events = this.events;
      },
      (err) => console.log(err),
      () => {
        console.log('yay curriculum');
      }
    );

    // topicService.getAllTopics().subscribe((data) => (this.topicList = data));
  }

  ngOnInit(): void {
    this.topicService
      .getAllTopics()
      .subscribe((data) => (this.fullTopicList = data));

    this.formData = new FormGroup({
      topicName: new FormControl('Topic'),
      techId: new FormControl(0),
      eventDay: new FormControl('Day'),
    });
    this.formRemoveData = new FormGroup({
      topicName: new FormControl(this.topicNameClick),
      topicId: new FormControl(this.topicIdClick),
    });
  }
  handleDateClick(arg: any) {
    // alert('date click! ' + arg.dateStr)
    this.day = arg.dateStr;
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    eventClick: this.handleEventClick.bind(this),
    eventDrop: this.handleEventDrop.bind(this),
    editable: true,
    selectable: true,
    selectMirror: true,
    weekends: false, // initial value
  };

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends; // toggle the boolean!
  }

  handleEventClick(arg: any) {
    this.topicIdClick = arg.event._def.sourceId;
    this.topicNameClick = arg.event._def.title;
    this.topicTagId = arg.event._def.extendedProps.tag;
    console.log(this.batchDays);
  }

  loadTopics(val: any) {
    this.topicList = this.fullTopicList.filter(
      (topic) => topic.tech.id == val.value
    );
  }

  /**
   * Updates this.batchDays when a topic is moved from one day to another
   * @param arg
   * @returns
   */
  handleEventDrop(arg: any) {
    // get the days the topic is moved from / to
    const initDay: BatchDay | undefined = this.batchDays.find(
      (curr) =>
        curr.date ==
        arg.oldEvent._instance.range.start.toISOString().split('T')[0]
    );
    const destDay: BatchDay | undefined = this.batchDays.find(
      (curr) =>
        curr.date == arg.event._instance.range.start.toISOString().split('T')[0]
    );

    if (!initDay || !destDay) {
      console.error('initDay or destDay undefined');
      return;
    }

    // move topic or quiz in curriculum[]
    if (arg.event._def.extendedProps.tag == '-1') {
      const movedQuiz: Quiz = initDay?.quiz;
      initDay.quiz = <Quiz>(<unknown>undefined);
      destDay.quiz = movedQuiz;
    } else {
      const movedTopic: Topic | undefined = initDay?.topics.find(
        (topic) => topic.name == arg.event._def.title
      );
      if (!movedTopic) {
        return;
      }
      initDay?.topics.splice(
        initDay.topics.findIndex((e) => e.id == movedTopic.id)
      );
      destDay?.topics.push(movedTopic);
    }

    // TODO: Mark what days are updated so when we save changes it keeps the number of requests to a minimum
    // Can add this when getting backend requets set up
  }

  loadTechs() {
    this.topicService.getAllTags().subscribe((data) => (this.techList = data));
  }

  addTopic(val: any) {
    // const techId = val.target[0].value;
    const topicId = val.target[1].value;
    // add topic to the calendar at this.day
    const topicToAdd: Topic | undefined = this.fullTopicList.find(
      (topic) => topic.id == topicId
    );

    if (!topicToAdd) {
      return;
    }
    // add to this.curriculum appropriate day
    this.batchDays
      .find((curriculum) => curriculum.date == this.day)
      ?.topics.push(topicToAdd);

    /*
      Refresh the calendar
        When resetting calendarOptions.events, the assigned array must be a new array, or it doesn't
        refresh the calendar. I'd like a more efficient option but the jquery calendar.fullCalender just wasn't working.
    */
    let newEvents = [];
    this.events.forEach((event) => newEvents.push(event));
    newEvents.push({
      id: `${topicToAdd.id}`,
      title: topicToAdd.name,
      date: this.day,
      tech: `${topicToAdd.tech.id}`,
    });
    this.events.push({
      id: `${topicToAdd.id}`,
      title: topicToAdd.name,
      date: this.day,
      tech: `${topicToAdd.tech.id}`,
    });
    this.calendarOptions.events = newEvents;
  }

  saveTopic(topic: any) {
    this.topicIdClick = topic.id;
  }
}
