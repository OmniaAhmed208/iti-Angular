import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private myClient:HttpClient) { } // containes[Post, Get, Put, Delete]

    private Base_Url = "http://localhost:3000/users";

    GetUsers(){
      return this.myClient.get(this.Base_Url);
    }

    GetUserById(id:any){ //for details
      return this.myClient.get(this.Base_Url+"/"+id);
    }

    AddUser(user:any){
      return this.myClient.post(this.Base_Url,user);
    }

    UpdateUser(id:any, user:any){
      return this.myClient.put(this.Base_Url+"/"+id,user);
    }

    DeleteUser(id:any){
      return this.myClient.delete(this.Base_Url+"/"+id);
    }
}

