import { Topic } from "./topic";

export class EmployeeTopic {

    topic: Topic;
    competency: number;

    constructor(topic:any){
        this.topic = topic.topic;
        this.competency = topic.competency;
    }

}
