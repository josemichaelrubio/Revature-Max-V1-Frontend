import { Quiz } from './quiz';


export class AssociateQuiz {

	quiz : Quiz;
	score: number;

	constructor(associateQuiz: any) {
		this.quiz = associateQuiz.quiz;
		this.score = associateQuiz.score;
	}
}
