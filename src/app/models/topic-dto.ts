import { Topic } from './topic';
import { Notes } from './notes';

export interface TopicDTO {
    topic: Topic;
    competency: number;
    starredNotesId: number;
    notes: Notes[];
}