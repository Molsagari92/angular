import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  title="dataFromParent";
  count=0;
  public changeValue: string;

  constructor() { }

  ngOnInit() {
  }

  handleAddOne(){
    this.count=this.count+1;
  }

  handleChange(value) {
    this.changeValue = value;
    console.log(value);
  }

}
