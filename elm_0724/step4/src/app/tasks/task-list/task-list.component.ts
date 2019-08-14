import { Component, OnInit } from '@angular/core';
import { bloomAdd } from '@angular/core/src/render3/di';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {

/* task1=new Task("egy");
task2=new Task("ketto");
task3=new Task("harom");
task4=new Task("negy");
task5=new Task("ot");
task6=new Task ("test"); */

public tasks: Array<Task>;

  
  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks=this.taskService.tasks;
  }

  getColor(){
      return "lightpink";
  }

  getBold(){
    return "bold";
  }

  startsWith (task) {
    if(task.name==='t'){
      return true;
    } else {
      return false;
    }
}

onTaskClicked(name: string){
alert(name);
}

onTaskAlert(bl: boolean){
  alert("Elértük a határt");
}
}



export class Task {
  name: string;
  owner: string;
  constructor (name: string, owner: string) {
    this.name=name;
    this.owner=owner;
  }
}
