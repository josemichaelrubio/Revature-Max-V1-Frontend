export class QuizAvg {
	quizName: string;
	average: string;
	count: string;

	constructor(quizAverage: any){
        this.quizName = quizAverage.quizName;
        this.average = quizAverage.average;
        this.count = quizAverage.count;
    }

}
