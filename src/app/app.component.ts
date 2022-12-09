import { Component } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homework3';
  selectImg:string  = "./assets/3 (1).png"
  imgArray:Array<string> = ["./assets/3 (1).png","./assets/3 (2).png","./assets/3 (3).png"]
  i  = 0
 


   increment (){
    this.selectImg = this.imgArray[this.i]
    this.i++

    if(this.i == this.imgArray.length){
      this.i = 0
    }
} 
dicrement (){
  this.selectImg = this.imgArray[this.i]
  this.i--
  if(this.i < 0){
    this.i = 2
  }
} 
 

  


}
