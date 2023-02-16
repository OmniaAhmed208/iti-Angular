import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  name = "";
  age = "";

  @Output() myEvent = new EventEmitter();

  Add(){

    if(+this.age >= 20 && +this.age <= 40 && this.name.length >= 3){

      let student = {name:this.name, age:this.age};
      this.myEvent.emit(student);

      // empty the inputs after add
      this.name='';
      this.age='';
    }
  }

}
