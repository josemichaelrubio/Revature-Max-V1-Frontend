export class TopicCompAvg {
	topicName: string;
	average: string;
	count: string;

	constructor(competencyAverage: any){
        this.topicName = competencyAverage.topicName;
        this.average = competencyAverage.average;
        this.count = competencyAverage.count;
    }

}
