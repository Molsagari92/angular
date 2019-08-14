import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profession',
  templateUrl: './profession.component.html',
  styleUrls: ['./profession.component.css']
})
export class ProfessionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  jobs=["szakacs","cukrasz", "fodrasz", "rendor", "focista"];
  weLikeIt=false;
  message="I like it";


  @Input()
  title: string;

  getColor() {
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
