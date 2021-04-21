import { Instructor } from './instructor';
import { QuizAvg } from './quiz-avg';
import { TopicCompAvg } from './topic-comp-avg';

export class BatchInfoAverages {
	description: string;
	instructor: Instructor;
	name: string;
	quizAverage: QuizAvg[];
	competencyAverage: TopicCompAvg[];

	constructor(batchInfoResponse?: any)
	{
        this.description = batchInfoResponse.description;
        this.instructor = batchInfoResponse.instructor;
        this.name = batchInfoResponse.name;
        this.quizAverage = batchInfoResponse.quizAverage;
        this.competencyAverage = batchInfoResponse.competencyAverage;
    }

}
