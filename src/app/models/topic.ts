import { Tag } from "./tag";

export class Topic {

    id:number;
    tag: Tag;
    name: string;

    constructor(topic:any){
        this.id = topic.id;
        this.tag=topic.tag;
        this.name= topic.name;
    }


}
