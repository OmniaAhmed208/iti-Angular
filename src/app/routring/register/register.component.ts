import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  myFormVlaidation = new FormGroup({
    name: new FormControl("omnia",Validators.minLength(3)), //Validators.required
    age: new FormControl(20,[Validators.min(20), Validators.max(40)]),
    mail:new FormControl("omnia@o.com")
  });

  get NameValid(){
    return this.myFormVlaidation.controls["name"].valid;
  }
  get AgeValid(){
    return this.myFormVlaidation.controls["age"].valid;
  }
  get MailValid(){
    return this.myFormVlaidation.controls["mail"].valid;
  }

  Add(){
    // console.log("All: ", this.myFormVlaidation);
    // console.log("Value: ", this.myFormVlaidation.value);
    console.log("Form Validation: ", this.myFormVlaidation.valid);
    // console.log("Name Valid", this.myFormVlaidation.controls["name"].valid);
    // console.log("Age Valid", this.myFormVlaidation.controls["age"].valid);
    // console.log("Email Valid", this.myFormVlaidation.controls["mail"].valid);
  }



  // if we work with #### in inputs

  // name ="";
  // age = "";
  // email="";

  // @Output() myEvent = new EventEmitter();

  // Add(n:any, age:any, mail:any){

  //   if(age >= 20 && age <= 40 && n.length >= 3){

  //     let student = {name:n, age:age, email:mail};
  //     this.myEvent.emit(student);

  //     // empty the inputs after add
  //     n='';
  //     age='';
  //     mail='';

  //     // console.log(student);
  //   }
  // }

}
