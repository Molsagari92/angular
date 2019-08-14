import { Component } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngFor';
  tomb=[1, 2, 3, 4, 5];
  sumOdd=0;
  sumEven: number;
  szam: number;
  rel: string;

  sum(){ 
      this.sumEven=0;
      this.sumOdd=0;
    for (let i=0;i<this.tomb.length;i++) {
      if(i%2===0) {
        this.sumOdd+=this.tomb[i];
      } else {
       this.sumEven+=this.tomb[i];
      }
    }
    if (this.sumEven>this.sumOdd) {
      this.rel="bigger";
    } else {
      this.rel="smaller";
    }
  }

  addNumber(){
    
  }
}
