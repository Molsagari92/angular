import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  first: number;
  second: number;
  sum: number;
  clicked=false;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.sum=this.first+this.second;
    this.clicked=true;
  }

}
