export class Instructor {
	id: number;
	role: string;
	name: string;
	email: string;

	constructor(instructor: any){
        this.id = instructor.id;
        this.role = instructor.role;
        this.name = instructor.name;
        this.email = instructor.email;
        
    }


}
