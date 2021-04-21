import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-batch-data',
  templateUrl: './batch-data.component.html',
  styleUrls: ['./batch-data.component.css']
})
export class BatchDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Line Chart data for Quiz Averages

  lineChartData: ChartDataSets[] = [
    {data: [92, 45, 78, 86, 77, 70, 30, 100], label: 'Quiz Score Averages', fill: false},
    {data: [70, 70, 70, 70, 70, 70], label: 'Failing Score', borderColor: 'red', backgroundColor: 'rgba(255, 0, 0, 0.1)', pointBackgroundColor: 'black'}
  ];

  lineChartLabels: Label[] = ['Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'];

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
  barChartLabels: Label[] = ['Java', 'Azure', 'Angular', 'Spring', 'HTML', 'Microservices'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [4.76, 4.2, 3.87, 3.1, 4.1, 0.5, 0], label: 'Topic Competency Averages', backgroundColor: 'rgba(0, 0, 0, 0.8)', hoverBackgroundColor: 'rgba(214, 116, 4, 0.6)', },
    { data: [5, 3, 4, 2, 4, 1], label: 'My Topic Competency', backgroundColor: 'rgba(255, 0, 0, 0.8)', hoverBackgroundColor: 'rgba(0, 116, 4, 0.6)', }
  ];

}
