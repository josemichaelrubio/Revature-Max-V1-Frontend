import { EmployeeQuiz } from "./employee-quiz";
import { EmployeeTopic } from "./employee-topic";
import { User } from "./user";

export class EmployeeInfo {

    employee: User;
    quizzes: EmployeeQuiz[];
    topics: EmployeeTopic[];

    constructor(_employee: User, _quizzes: EmployeeQuiz[], _topics: EmployeeTopic[]){
        this.employee = _employee;
        this.quizzes = _quizzes;
        this.topics = _topics;
    }

}
