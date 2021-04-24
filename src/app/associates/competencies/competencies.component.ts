import { Component, OnInit } from '@angular/core';
import { AssociateDataService } from '../../services/associate-data.service';
import { AssociateQuiz } from '../../models/associate-quiz';
import { EmployeeInfo } from '../../models/employee-info';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ChartOptions, ChartType, ChartDataSets, RadialChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-competencies',
  templateUrl: './competencies.component.html',
  styleUrls: ['./competencies.component.css']
})
export class CompetenciesComponent implements OnInit {

	employeeInfo! : EmployeeInfo; 
	associateQuizzes : AssociateQuiz[] = [];
	tagCompAvg : any = [];
  	tagCompetencies : any = {};
  	tagNames : string[] = [];

  	associateQuizScoresDataSet : number[] = [];


  constructor(private associateDataService: AssociateDataService) { 
	this.associateDataService.getEmployeeInfo().subscribe( 
		(response: EmployeeInfo) => {
			this.employeeInfo = response;
			this.associateQuizzes = this.employeeInfo.quizzes;

		},
		(error) => console.log("Error occured"),
		() => {
			console.log(this.associateQuizzes);
			console.log(this.associateQuizzes[0].quiz.name);

		}

	)

	associateDataService.getEmployeeInfo().pipe(take(1)).subscribe(
           (response: EmployeeInfo) => {
             console.log(response);
             this.employeeInfo = response;
             for (let empQuiz of this.employeeInfo.quizzes) {
               this.associateQuizScoresDataSet.push(empQuiz.score);
             }

             this.associateQuizScoresDataSet.push(0, 100);

        
             for (let empTopic of this.employeeInfo.topics) {
                 if (!(empTopic.topic.tag.name in this.tagCompetencies)) {
                    this.tagCompetencies[empTopic.topic.tag.name] = [];
                    this.tagCompetencies[empTopic.topic.tag.name].push(empTopic.competency);
                 }

                 else {
                   this.tagCompetencies[empTopic.topic.tag.name].push(empTopic.competency)

                 }
            }

            for (let tagName in this.tagCompetencies) {
              this.tagNames.push(tagName);
              let length = this.tagCompetencies[tagName].length;
              let sum = 0;
              for (let i=0; i < length; i++) {
                sum += this.tagCompetencies[tagName][i];
              }
              let average = (sum/length).toPrecision(2);
              console.log(average);
              this.tagCompAvg.push(average);

            } 

            console.log(this.tagCompAvg);

          },
            
           (error) => console.log(error),
           () => console.log(this.employeeInfo)
        )

  }

  ngOnInit(): void {
  }


  quizId!: number;
  setQuizId(quizId : number) {
  	this.quizId = quizId;
  	console.log(this.quizId);
  }

  score!: number;
  setScore(score: number) {
  		this.score = score;
  		console.log(this.score);
		let o = {"score": score};
		this.associateDataService.setEmployeeQuiz(JSON.stringify(o), this.quizId);
	}


  radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  radarChartLabels: Label[] = this.tagNames;

  radarChartData: ChartDataSets[] = [
    { data: this.tagCompAvg, label: 'Associate Topic Competency Analysis', backgroundColor: 'rgba(248, 148, 6, 0.2)', borderColor: 'rgba(248, 148, 6, 1)'  }
  ];

  //backgroundColor: 'rgba(248, 148, 6, 1)'
  radarChartType: ChartType = 'radar';


    lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

}
