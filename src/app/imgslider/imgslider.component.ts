import { Component } from '@angular/core';

@Component({
  selector: 'app-imgslider',
  templateUrl: './imgslider.component.html',
  styleUrls: ['./imgslider.component.css']
})
export class ImgsliderComponent {


  images = ["assets/images/app3.jpg","assets/images/52268.jpg","assets/images/app1.webp",
  "assets/images/fur3.webp","assets/images/lap.webp"];

  imgsrc:string = this.images[0];
  
  i=1;
  next(){

    if (this.i != this.images.length){//5

      if(this.i==0){this.imgsrc = this.images[this.i++];}

      this.imgsrc = this.images[this.i++];
    }
    else{
      this.i = this.images.length-1;//4
    }
  }

  previous(){

    if (this.i > 0){
      this.i = --this.i;
      this.imgsrc = this.images[this.i];
    }
  }
  
  changes:any;
  slide(){
    var i = -1;

    this.changes = setInterval(() =>{
      
      var index = ++i;
      animate(index);

      if(index > this.images.length-1){
          i = -1;
      }

    },500);

    const animate = (index:number) =>{
      if(index <= this.images.length-1){
        // console.log(index);  
        this.imgsrc = this.images[index++];
      }
    }
  }

  stop(){
    clearInterval(this.changes);
  }
}
