import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  title: String;

  @Output() addOne=new EventEmitter();

  @Output() writeChange = new EventEmitter();
  changeVal: string;

  constructor() { }

  ngOnInit() {
  }

    public addToCounter(){
      this.addOne.emit();
    }

    public changeWrite(value) {
      this.writeChange.emit(value);
    }
}
