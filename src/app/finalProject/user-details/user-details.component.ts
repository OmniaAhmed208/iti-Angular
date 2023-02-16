import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: []
})
export class UserDetailsComponent implements OnInit{

  Id = 0;
  user:any;
  
  constructor(myActivate:ActivatedRoute, public myService:StudentsService){
    this.Id = myActivate.snapshot.params["id"];
  }
  
  ngOnInit(): void {
    this.myService.GetUserById(this.Id).subscribe({
      next:(data)=>{
        this.user = data;
      }
    })
  }
}
