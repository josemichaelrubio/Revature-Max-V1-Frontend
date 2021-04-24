import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { BatchInfoAverages } from '../../../models/batch-info-averages';
import { AverageService } from '../../../services/average.service';

@Component({
  selector: 'app-batch-data',
  templateUrl: './batch-data.component.html',
  styleUrls: ['./batch-data.component.css']
})
export class BatchDataComponent implements OnInit {

  averages!:BatchInfoAverages;

  batchId: number = +(sessionStorage.getItem("userBatchId") || 1);

  quizAvgDataSet: number[] = [];
  quizLabels: string[] = [];

  topicCompAvgDataSet: number[] = [];
  topicLabels: string[] = [];

  constructor(private averageService:AverageService) {
    averageService.getBatchInfo(this.batchId).subscribe((avg)=>{
      this.averages=avg;
      for(let quizAvg of this.averages.quizAverage){
        this.quizAvgDataSet.push(quizAvg.averageScore);
        this.quizLabels.push(quizAvg.quizName);
      }

      this.quizAvgDataSet.push(50, 100);
  
      for(let compAvg of this.averages.competencyAverage){
        this.topicCompAvgDataSet.push(compAvg.averageCompetency);
        this.topicLabels.push(compAvg.tagName);
      }

      this.topicCompAvgDataSet.push(0, 5);

    }, 
      (err)=>console.log(err), 
      ()=>console.log(this.averages)
    );

  }

  ngOnInit(): void {
  }

  // Line Chart data for Quiz Averages

  lineChartData: ChartDataSets[] = [
    {data: this.quizAvgDataSet, label: 'Quiz Score Averages', fill: false}
  ];

  lineChartLabels: Label[] = this.quizLabels;

  lineChartOptions: ChartOptions = {responsive: true };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      pointBackgroundColor: 'orange',
      pointRadius: 7,
      pointStyle: 'rectRot'
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType: ChartType = "line";

  // Bar Chart Data for Topic Competencies

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = this.topicLabels;
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: this.topicCompAvgDataSet, label: 'Topic Competency Averages', backgroundColor: 'rgba(0, 0, 0, 0.8)', hoverBackgroundColor: 'rgba(214, 116, 4, 0.6)', }
  ];

}
