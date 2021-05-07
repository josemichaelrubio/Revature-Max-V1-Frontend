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
import { QC } from 'app/models/qc';

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
  topicDateClick!: string;
  topicTagId!: string;
  quizList: Quiz[] = [];

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
              tech: 'quiz',
            });
          }
          if (curDay.qc) {
            this.events.push({
              id: `${curDay.qc.id}`,
              title: curDay.qc.name,
              date: curDay.date,
              tech: 'QC',
            });
          }
          console.log("day: ")
          console.log(curDay)
        }
        this.calendarOptions.events = this.events;
      },
      (err) => console.log(err),
      () => {
        console.log('yay curriculum: ', this.batchDays);
        console.log('yay events: ', this.events);
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
      topicDate: new FormControl(this.topicDateClick),
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

  loadQuizzes() {
    // new backend has an endpoint for quizzes, so we'd just do a service call here.
    // for old backend I'll just grab from curriculum[]
    if (this.quizList.length == 0) {
      this.batchDays.forEach((curriculum) => {
        if (curriculum.quiz) {
          this.quizList.push(curriculum.quiz);
        }
      });
      console.log('Updated quiz list');
    }
  }

  /**
   * Updates this.batchDays when a topic is moved from one day to another
   * @param arg
   * @returns
   */
  handleEventDrop(arg: any) {
    // get the days the topic is moved from / to
    const initDate = arg.oldEvent._instance.range.start
      .toISOString()
      .split('T')[0];
    const destDate = arg.event._instance.range.start
      .toISOString()
      .split('T')[0];
    const initDay: BatchDay | undefined = this.batchDays.find(
      (curr) => curr.date == initDate
    );
    let destDay: BatchDay | undefined = this.batchDays.find(
      (curr) => curr.date == destDate
    );

    if (!initDay) {
      console.error('initDay undefined');
      return;
    }

    if (!destDay) {
      let batchId = sessionStorage.getItem('userBatchId')!;
      destDay = new BatchDay(
        -1,
        +batchId,
        this.day,
        [],
        <Quiz>(<unknown>undefined),
        <QC>(<unknown>undefined)
      );
      this.batchDays.push(destDay);
    }

    // move topic or quiz in curriculum[]
    if (arg.event._def.extendedProps.tech == 'quiz') {
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

    console.log(initDay);

    console.log(destDay);

    // change this.events date
    const movedEvent = this.events.find(
      (event) => event.title == arg.event._def.title
    );
    if (!movedEvent) return;
    let f = this.events.map((e) => e.title).indexOf(arg.event._def.title);
    movedEvent.date = destDate;
    // this.events[f].date = destDate;

    console.log('(eventDrop) Event: ', movedEvent);
    console.log('(eventDrop) events[f] ', this.events[f]);

    console.log('(eventdrop) List of events: ', this.events);

    // TODO: Mark what days are updated so when we save changes it keeps the number of requests to a minimum
    // Can add this when getting backend requets set up
  }

  loadTechs() {
    this.topicService.getAllTags().subscribe((data) => (this.techList = data));
  }

  addTopic(val: any) {
    const topicId = val.target[1].value;
    const topicToAdd: Topic | undefined = this.fullTopicList.find(
      (topic) => topic.id == topicId
    );

    if (!topicToAdd) {
      return;
    }
    if (this.events.find((e) => e.title == topicToAdd.name)) {
      console.log(
        'The topic already exists in the curriculum. For now, just refusing to add it'
      );
      return;
    }

    // add to this.curriculum appropriate day (create one if necessary)
    let destDay = this.batchDays.find(
      (curriculum) => curriculum.date == this.day
    );
    if (!destDay) {
      let batchId = sessionStorage.getItem('userBatchId');
      if (!batchId) return;
      destDay = new BatchDay(
        -1,
        +batchId,
        this.day,
        [],
        <Quiz>(<unknown>undefined),
        <QC>(<unknown>undefined)
      );
    }
    destDay.topics.push(topicToAdd);

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
    this.events = newEvents;
    this.calendarOptions.events = newEvents;

    // console.log('(addTopic) destDay ', destDay);
    // console.log('(addTopic) events ', this.events);
  }

  addQuiz(arg: any) {
    const quizId = arg.target[0].value;
    const quizToAdd: Quiz | undefined = this.quizList.find(
      (quiz) => quiz.id == quizId
    );

    if (this.events.find((e) => e.title == quizToAdd?.name)) {
      console.log(
        'The quiz already exists in the curriculum. For now, just refusing to add it'
      );
      return;
    }

    // add to this.curriculum appropiate day
    let batchDay = this.batchDays.find((curr) => curr.date == this.day);
    if (!batchDay) {
      let batchId = sessionStorage.getItem('userBatchId');
      if (!batchId) return;
      batchDay = new BatchDay(
        -1,
        +batchId,
        this.day,
        [],
        <Quiz>(<unknown>undefined),
        <QC>(<unknown>undefined)
      );
    }
    if (batchDay.quiz || !quizToAdd) {
      console.log("Quiz already present on that day, can't add");

      return;
    }
    batchDay.quiz = quizToAdd;

    // Refresh the calendar
    // Refer to above method (addTopic) for why I don't like this but it's here anyway
    let newEvents = [];
    this.events.forEach((event) => newEvents.push(event));
    newEvents.push({
      id: `${quizToAdd.id}`,
      title: quizToAdd.name,
      date: this.day,
      tech: `quiz`,
    });
    this.events.push({
      id: `${quizToAdd.id}`,
      title: quizToAdd.name,
      date: this.day,
      tech: `quiz`,
    });
    this.calendarOptions.events = newEvents;

    // console.log('(addQuiz) ', batchDay);
  }

  saveTopic(topic: any) {
    this.topicIdClick = topic.id;
  }

  removeTopic() {
    const removedEvent = this.events.find(
      (event) => event.title == this.topicNameClick
    );
    let newEvents: any = [];
    this.events.forEach((event) => {
      if (
        !(
          event.title == removedEvent?.title && event.date == removedEvent?.date
        )
      ) {
        newEvents.push(event);
      }
    });
    this.events = newEvents;
    this.calendarOptions.events = newEvents;
    let curDay: BatchDay | undefined = this.batchDays.find(
      (curr) => curr.date == removedEvent?.date
    );
    if (curDay) {
      if (removedEvent?.tech == 'quiz') {
        const batchDayToRemoveFrom = this.batchDays.find(
          (curr) => curr.date == removedEvent.date
        );
        if (batchDayToRemoveFrom) {
          batchDayToRemoveFrom.quiz = <Quiz>(<unknown>undefined);
        }
      } else {
        this.batchDays
          .find((curr) => curr.date == removedEvent?.date)
          ?.topics.splice(
            curDay.topics.findIndex((e) => e.name == removedEvent?.title)
          );
      }
    }
    console.log('(remove) curDay events: ', curDay);
    console.log('(remove) curriculum after removing: ', this.batchDays);
    console.log('(remove) events: ', this.events);
  }
}
