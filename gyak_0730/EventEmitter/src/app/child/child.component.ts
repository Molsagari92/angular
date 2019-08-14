import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

    @Output() addOne=new EventEmitter();
    totalValue=0;

    @Output() subOne=new EventEmitter();

    @Output() changeIt=new EventEmitter();

    @Output() addIt=new EventEmitter();
    fruit: string;

  constructor() { }

  ngOnInit() {
  }

  public plusOne() {
    this.totalValue = this.totalValue + 1;
    this.addOne.emit(this.totalValue);
  }

  public minusOne() {
    this.totalValue = this.totalValue -1;
    this.subOne.emit(this.totalValue);
  }

  public changeArray() {
   this.changeIt.emit();
  }

  public addFruit() {
    this.addIt.emit(this.fruit);
  }
}

