import { Injectable } from '@angular/core';
import {Task} from "../task-list/task-list.component";

@Injectable()
export class TaskService {
  
  private _tasks: Array<Task>=[
    new Task("asdasd1", "há én"),
    new Task("asdasd2", "há én"),
    new Task("asdasd3", "há én"),
    new Task("asdasd4", "há én"),
    new Task("asdasd5", "há én"),
  ];

  constructor() { }

  get tasks(): Array<Task>{
    return this._tasks;
  }

  public addTask(newTask:Task){
    this._tasks.push(newTask);
  }

}
