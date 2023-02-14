import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  students:{name:string, age:string}[] = [];

  GetData(data:any){

    this.students.push(data);
    // console.log(this.students);
  
  }
}
