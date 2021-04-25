export class QuizAvg {
	id: number;
	quizName: string;
	averageScore: number;
	scoresCounted: number;

	constructor(quizAverage: any){
		this.id = quizAverage.id;
        this.quizName = quizAverage.quizName;
        this.averageScore = quizAverage.averageScore;
        this.scoresCounted = quizAverage.scoresCounted;
    }

}