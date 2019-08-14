import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-manager';
  name="homeworks";
  id=1;
  isImportant=true;
  a=0;
  b=0;
  secondName="";
  message="";
  checked: boolean;
  x: String;

  Hello(){
    alert("hello! :)");
  }

  Count() {
    if(this.a+this.b>1000){
      alert(this.a+this.b +" Big number!");
    } else {
      alert(this.a+this.b+" Small number!");
    }
  }

  WriteOut() {
    if(this.secondName.length<3) {
      alert("The name is too short!")
    } else {
    alert("Kinek? "+this.secondName+" Mit? "+this.message);
    }
  }


  
} 
