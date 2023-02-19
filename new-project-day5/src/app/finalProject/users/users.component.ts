import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: []
})
export class UsersComponent implements OnInit {

  id = 0;
  users:any;
  constructor(public myService:StudentsService, public myActivate:ActivatedRoute){}
  
  ngOnInit(): void {

    this.myService.GetUsers().subscribe({
      next:(data)=>{
        this.users = data;
        console.log(this.users);
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }

  delete(){
    let msg = window.confirm("Are you sure for deleting it?");
    if(msg == true){
      this.id = this.myActivate.snapshot.params["id"];
      this.myService.DeleteUser(this.id).subscribe();
      // history.back();
      window.location.href = '/';
    }
  }
  
}
