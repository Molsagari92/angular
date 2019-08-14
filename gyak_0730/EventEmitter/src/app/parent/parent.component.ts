import { Component, OnInit, Input } from '@angular/core';
import { findSafariExecutable } from 'selenium-webdriver/safari';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  piece=0;
  n=0;
  array=["alma", "korte", "barack"];

  handleAddOne(value) {
    this.piece=value;
  }

  handleSubOne(value) {
    this.piece=value;
  }

  handleArrayChange() {
    if (this.n<this.array.length-1){
      this.n+=1;
    } else {
      this.n=0;
    }
  }

  handleAddIt(fruit) {
    this.array.push(fruit);
  }

  ngOnInit() {
  }

}
