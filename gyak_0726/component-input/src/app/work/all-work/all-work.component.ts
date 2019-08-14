import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-all-work',
  templateUrl: './all-work.component.html',
  styleUrls: ['./all-work.component.css']
})
export class AllWorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  houseWorkTitle = "Housework";
  professionTitle="Profession";


}
