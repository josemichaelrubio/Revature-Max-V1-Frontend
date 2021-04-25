
import {Instructor} from './instructor';

export class Batch {
	description: string;
	instructor: Instructor;
	name: string;

	constructor(batch: any) {
		this.description = batch.description;
		this.instructor = batch.instructor;
		this.name = batch.name;
	}
}