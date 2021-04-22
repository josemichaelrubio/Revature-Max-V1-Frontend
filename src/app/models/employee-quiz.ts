import { Quiz } from "./quiz";

export class EmployeeQuiz {

    quiz: Quiz;
    score: number;


    constructor(quiz:any){
        this.quiz = quiz.quiz;
        this.score = quiz.quizScore;
    }

}
