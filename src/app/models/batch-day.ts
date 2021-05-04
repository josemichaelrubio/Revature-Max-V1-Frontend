import { Quiz } from './quiz';
import { Topic } from './topic';

export class BatchDay {
  id: number;
  batchId: number;
  date: string;
  topics: Topic[];
  quiz: Quiz;

  constructor(
    _id: number,
    _batchId: number,
    _date: string,
    _topics: Topic[],
    _quiz: Quiz
  ) {
    this.id = _id;
    this.batchId = _batchId;
    this.date = _date;
    this.topics = _topics;
    this.quiz = _quiz;
  }
}
