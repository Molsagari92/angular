import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {



  meat=new Item("meat", 1500);
  flour=new Item("flour", 400);
  cheese=new Item("cheese", 700);

  food=[this.meat, this.flour, this.cheese];
  
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
