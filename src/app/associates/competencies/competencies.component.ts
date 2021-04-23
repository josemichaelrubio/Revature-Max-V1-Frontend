import { Component, OnInit } from '@angular/core';
import { AssociateDataService } from '../../services/associate-data.service';
import { AssociateQuiz } from '../../models/associate-quiz';
import { EmployeeInfo } from '../../models/employee-info';

@Component({
  selector: 'app-competencies',
  templateUrl: './competencies.component.html',
  styleUrls: ['./competencies.component.css']
})
export class CompetenciesComponent implements OnInit {

	employeeInfo! : EmployeeInfo; 
	associateQuizzes : AssociateQuiz[] = [];

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



}
