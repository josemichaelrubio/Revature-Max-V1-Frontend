export class TopicCompAvg {
	id: number;
	tagName: string;
	averageCompetency: number;
	competenciesCounted: number;

	constructor(competencyAverage: any){
		this.id = competencyAverage.id;
        this.tagName = competencyAverage.tagName;
        this.averageCompetency = competencyAverage.averageCompetency;
        this.competenciesCounted= competencyAverage.competenciesCounted;
    }

}
