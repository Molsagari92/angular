import { Component } from '@angular/core';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-course';
  szam=7;
  name: string;
  checked:boolean; //így adom meg érték nélkül


  Hello(){
    alert('Hello!');
  }

  greeter(){
    alert('Hello '+ this.name);
  }
  
  reset(){
    if (!this.checked){
    if(this.name==='' || this.name===undefined) {
      alert('De ez már üres!');
    } else {
    this.name=undefined;
    }
  } else {
    alert ('A mező védett!');
  }
  }

  getColor(){
    if(this.name.length>3){
      return "lightblue";
    }
  }
  
}
