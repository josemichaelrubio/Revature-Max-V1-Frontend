export class QuizAvg {
	quizName: string;
	averageScore: number;
	scoresCounted: number;

	constructor(quizAverage: any){
        this.quizName = quizAverage.quizName;
        this.averageScore = quizAverage.averageScore;
        this.scoresCounted = quizAverage.scoresCounted;
    }

}