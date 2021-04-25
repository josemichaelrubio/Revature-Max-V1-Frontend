import { User } from './user';

export class LoginResponse {


   token: string = "";
   user: User;
   userBatchId: number;

   constructor(_token:string, _user:User, _userBatchId:number,){
     this.token = _token;
     this.user = _user;
     this.userBatchId= _userBatchId;

   }

}
