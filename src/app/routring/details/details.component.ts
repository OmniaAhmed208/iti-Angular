import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: [
  ]
})
export class DetailsComponent {

  id = 0;
  constructor(myRouter: ActivatedRoute){ //contains url to get params(id) by snapshot  

    // console.log(myRouter);
    // console.log(myRouter.snapshot.params["id"]);
    this.id = myRouter.snapshot.params["id"];
  }
}
