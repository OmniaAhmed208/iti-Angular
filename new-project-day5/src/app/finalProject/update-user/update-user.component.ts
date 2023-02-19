import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: []
})
export class UpdateUserComponent {

  id=0;
  student:any;

  constructor(public myService:StudentsService, myActivate:ActivatedRoute){
    this.id = myActivate.snapshot.params["id"];
  }

  ngOnInit(): void { // after load the page get the info. of student
    this.myService.GetUserById(this.id).subscribe({
      next:(data)=>{
        this.student = data;
      },
      error:(err)=>{console.log(err)}
    })
  }

  Update(name:any,age:any,email:any,address:any,city:any,phone:any){

    let updatedStudent={name,age,email,address,city,phone};

    this.myService.UpdateUser(this.id, updatedStudent).subscribe();

    window.alert('Updated Successfully');
    history.back();
  }

}
