import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { BatchInfoAverages } from '../../models/batch-info-averages';
import { EmployeeInfo } from '../../models/employee-info';
import { AssociateDataService } from '../../services/associate-data.service';
import { AverageService } from '../../services/average.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-averages',
  templateUrl: './averages.component.html',
  styleUrls: ['./averages.component.css']
})
export class AveragesComponent implements OnInit {

	batchInfoAverages!: BatchInfoAverages;
  employeeInfo! : EmployeeInfo;

	batchId : number = +(sessionStorage.getItem("userBatchId") || "");

  quizAveragesDataSet : number[] = [];
  quizLabels : string[] = [];
  countForQuiz: number[] = [];

  topicAveragesDataSet : number[] = [];
  topicLabels : string[] = [];
  countForTopics : number[] = [];


  associateQuizScoresDataSet : number[] = [];

  constructor(private averageService : AverageService, private associateDataService: AssociateDataService) {
  		//this.batchInfoAverages = batchInfoAverages;
  		this.averageService.getBatchInfo(this.batchId).pipe(take(1)).subscribe(
  			(response: BatchInfoAverages) => {
          this.batchInfoAverages = response;
          for (let quizAvg of this.batchInfoAverages.quizAverage) {
            this.quizAveragesDataSet.push(quizAvg.averageScore);
            this.quizLabels.push(quizAvg.quizName);
            this.countForQuiz.push(quizAvg.scoresCounted);
          }

          this.quizAveragesDataSet.push(0, 100);

          for (let topicAvg of this.batchInfoAverages.competencyAverage) {
            this.topicAveragesDataSet.push(topicAvg.averageCompetency);
            this.topicLabels.push(topicAvg.tagName);
            this.countForTopics.push(topicAvg.competenciesCounted);
          }

          this.topicAveragesDataSet.push(0, 20);
        },
  			(error) => console.log("There is an error"),
  			() => console.log(this.batchInfoAverages)
  		)

      associateDataService.getEmployeeInfo().pipe(take(1)).subscribe(
           (response: EmployeeInfo) => {
             this.employeeInfo = response;
             for (let empQuiz of this.employeeInfo.quizzes) {
               this.associateQuizScoresDataSet.push(empQuiz.score);
             }

             this.associateQuizScoresDataSet.push(0, 100);


           }
        )
  }

   

  ngOnInit(): void {

  }


  barChartOptionsQuizzes: ChartOptions = {
   responsive: true,
  };
  barChartLabelsQuizzes: Label[] = this.quizLabels;
  barChartTypeQuizzes: ChartType = 'bar';
  barChartLegendQuizzes = true;
  barChartPluginsQuizzes = [];

  barChartDataQuizzes: ChartDataSets[] = [
    { data: this.quizAveragesDataSet, label: 'Quiz Average for Batch' },
    { data: this.associateQuizScoresDataSet, label: 'Your Score'},
    { data: this.countForQuiz, label: 'Number of Quizzes Submitted'}
  ];

   barChartOptionsTopics: ChartOptions = {
   responsive: true,
  };
  barChartLabelsTopics: Label[] = this.topicLabels;
  barChartTypeTopics: ChartType = 'bar';
  barChartLegendTopics = true;
  barChartPluginsTopics = [];

  barChartDataTopics: ChartDataSets[] = [
    { data: this.topicAveragesDataSet, label: 'Topic Competency Average for Batch' },
    { data: this.countForTopics, label: 'Number of Competencies Submitted for Topic'}
  ];

}
