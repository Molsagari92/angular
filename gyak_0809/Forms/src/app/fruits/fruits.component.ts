import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  fruitName: string;
  fruitColor: string;
  fruitCalories: number;
  fruitSize: string;
  fruitID=1;
  clicked=false;
  Fruits=[];

  constructor() { }

  ngOnInit() {
  }

  onChange(event){
    this.fruitSize=event.target.value;
  }

  onClick(){
    this.clicked=!this.clicked;
    this.Fruits[this.fruitID-1]={
        id: this.fruitID,
        name: this.fruitName,
        color: this.fruitColor,
        calories: this.fruitCalories,
        size: this.fruitSize
    }
    console.log(this.Fruits[this.fruitID-1]);
    this.fruitID++;
  }
}
