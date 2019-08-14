import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pear',
  templateUrl: './pear.component.html',
  styleUrls: ['./pear.component.css']
})
export class PearComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  pearPieces: any;

  ngOnInit() {
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.pearPieces=params.pearPieces;
      }
    );
  }
}
