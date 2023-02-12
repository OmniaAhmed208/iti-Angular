import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  name = "";

  getData(e:any){
    this.name = e.target.value;
  }

  reset(){
    this.name = ""; // to empty the div of data (not input)
  }
}
