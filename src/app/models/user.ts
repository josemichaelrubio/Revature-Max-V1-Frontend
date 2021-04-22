export class User{


  email:string;
  name:string;
  role:string;

  constructor(_id:number, _email:string, _name:string, _role:string, _token:string){

    this.email=_email;
    this.name=_name;
    this.role=_role;
  }
 }
