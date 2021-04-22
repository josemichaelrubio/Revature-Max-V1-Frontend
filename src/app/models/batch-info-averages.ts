import { Batch } from './batch';
import { QuizAvg } from './quiz-avg';
import { TopicCompAvg } from './topic-comp-avg';


export class BatchInfoAverages {
	batch: Batch
	quizAverage: QuizAvg[];
	competencyAverage: TopicCompAvg[];

	constructor(batchInfoResponse: any)
	{
        this.batch = batchInfoResponse.batch;
        this.quizAverage = batchInfoResponse.quizAverage;
        this.competencyAverage = batchInfoResponse.competencyAverage;
    }

}
