import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngIf-ngClass-ngStyle';
  szoveg='';
  checked: boolean;
  color: string;

  onClickPink(){
    this.color="pink";
  }

  onClickYellow(){
    this.color="yellow";
  }

  onClickBlue(){
    this.color="blue";
  }

  getColor(){
    if(this.szoveg.length>=15){
      if(this.color==="yellow"){
        return "yellow";
      } else if(this.color==="blue"){
        return "blue";
      } else if(this.color==="pink"){
        return "pink";
      } 
    }
  }
}
