import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tetszoleges';
  name: string;
  age: number;
  gender=false;
  public tomb=[];

  public add() {
    const person={
      name: this.name,
      age: this.age,
      gender: this.gender
    }
    this.tomb.push(person);
    console.log(this.tomb);
    if(this.tomb.length===3){
      console.log(this.tomb[1]);
    }
  }
}
