import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-szines-string',
  templateUrl: './szines-string.component.html',
  styleUrls: ['./szines-string.component.css']
})
export class SzinesStringComponent implements OnInit {
  @Input()
  text = "kutya";

  constructor() { }

  ngOnInit() {
  }

}
