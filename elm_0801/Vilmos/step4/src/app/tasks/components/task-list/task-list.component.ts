import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service';
import { Observable } from 'rxjs/Observable';
import { LogService } from '../../services/log.service';

export class Task {
  name: string;
  owner: string;
  type: string;

  constructor(name, owner) {
    this.name = name;
    this.owner = owner;
  }

  
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public tasks: Array<Task>;
  constructor(private taskService: TaskService, private logService: LogService) {}


  ngOnInit() {
    this.tasks = this.taskService.tasks;
    this.taskService.getAll().subscribe(
      (adat) => {
        this.logService.log(adat);
      } 
    );
    //this.handleGetAllObs();
  }

  startsWithT(string) {
    if (string.charAt(0) === 't') {
      return true;
    } else {
      return false;
    }
  }

  onTaskClicked(name: string) {
    alert(name);
  }

 /* Kódolvashatóság miatt szervezhetjük ki a dolgot  
 
 handleGetAllObs(){
    const subscription = this.taskService.getAll().subscribe(this.handleResult); 
     Kódolvashatóság miatt szerveztük ki a dolgot
     (adat)=> {
        this.logService.log(adat);
      } 
    ) 
  }

  handleResult(adat){
    this.logService.log(adat);
  } */

}
