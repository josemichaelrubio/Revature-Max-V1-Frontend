export class User{

    id:number;
    email:string;
    name:string;
    role:string;

    constructor(_id:number, _email:string, _name:string, _role:string){
      this.id=_id;
      this.email=_email;
      this.name=_name;
      this.role=_role;
    }
   }
  
