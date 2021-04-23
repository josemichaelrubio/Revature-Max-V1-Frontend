export class TopicCompAvg {
	tagName: string;
	averageCompetency: number;
	competenciesCounted: number;

	constructor(competencyAverage: any){
        this.tagName = competencyAverage.tagName;
        this.averageCompetency = competencyAverage.averageCompetency;
        this.competenciesCounted= competencyAverage.competenciesCounted;
    }

}
