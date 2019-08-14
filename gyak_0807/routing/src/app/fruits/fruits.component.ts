import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  applePieces=3;
  peachPieces=5;
  pearPieces=7;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onClickApple(){
    this.router.navigate(['./apple'], {queryParams: {applePieces: this.applePieces}})
  }

  onClickPeach(){
    this.router.navigate(['./peach'], {queryParams: {peachPieces: this.peachPieces}})
  }

  onClickPear(){
    this.router.navigate(['./pear'], {queryParams: {pearPieces: this.pearPieces}})
  }
}
