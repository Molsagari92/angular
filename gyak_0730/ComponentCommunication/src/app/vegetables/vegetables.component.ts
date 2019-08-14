import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent implements OnInit {

  tomato=new Item("tomato", 300);
  pepper=new Item("pepper", 800);
  carrot=new Item("carrot", 200);

  vegetables=[this.tomato, this.pepper, this.carrot];
  constructor() { }

  ngOnInit() {
  }

}

export class Item{
  name:string; 
  price:number;
  constructor(name:string, price:number){
    this.name=name;
    this.price=price;
  }
}
