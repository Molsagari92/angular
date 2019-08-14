import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-peach',
  templateUrl: './peach.component.html',
  styleUrls: ['./peach.component.css']
})
export class PeachComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  peachPieces: any;

  ngOnInit() {
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.peachPieces=params.peachPieces;
      }
    );
  }

}
