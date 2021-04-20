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

}
