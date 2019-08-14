import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-housework',
  templateUrl: './housework.component.html',
  styleUrls: ['./housework.component.css']
})
export class HouseworkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  houseworks=["mosogatás", "porszívózás", "mosás", "főzés", "portörlés"];
  weLikeIt=true;
  message="I don't like it";

  @Input()
  title: string;

  getColor(){
    if (this.weLikeIt===true) {
      return "green";
    } else {
      return "red";
    }
  }

  doWeLike(){
    this.weLikeIt=!this.weLikeIt;
    if (this.weLikeIt===true) {
      this.message="I don't like it";
    } else {
      this.message="I like it";
    }
  }



}
