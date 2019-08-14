import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sweetness',
  templateUrl: './sweetness.component.html',
  styleUrls: ['./sweetness.component.css']
})
export class SweetnessComponent implements OnInit {

  chocolate=new Item("chocolate", 150);
  icecream=new Item("iceCream", 1200);
  cake=new Item("cake", 600);

  sweetness=[this.chocolate, this.icecream, this.cake];

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
