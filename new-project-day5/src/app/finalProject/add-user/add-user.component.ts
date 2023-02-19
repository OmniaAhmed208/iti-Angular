import { Component } from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: []
})
export class AddUserComponent {

  constructor(public myService:StudentsService){}

  add(name:any,age:any,email:any,address:any,city:any,phone:any){

    let newStudent={name,age,email,address,city,phone};

    this.myService.AddUser(newStudent).subscribe();

    window.alert('Added Successfully :)');
  }
}
