import { Quiz } from "./quiz";
import { Topic } from "./topic";

export class Curriculum {
    id:number;
    date:string;
    topics: Topic[];
    quizzes: Quiz[];

    constructor(_id:number, _date:string, _topics:Topic[], _quizzes:Quiz[]){

        this.id = _id;
        this.date = _date;
        this.topics = _topics;
        this.quizzes = _quizzes;

    }
}
