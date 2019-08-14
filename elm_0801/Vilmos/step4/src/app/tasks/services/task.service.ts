import { Injectable } from '@angular/core';
import {Task} from '../components/task-list/task-list.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class TaskService {

  private _tasks: Array<Task> = [
    /* new Task('asdasd', 'há én'),
    new Task('asd2', 'há te'),
    new Task('asd3', 'há ő'),
    new Task('asd4', 'há én'),
    new Task('asd5', 'há én') */
  ];

  constructor(private httpClient: HttpClient) { }

  get tasks(): Array<Task> {
    return this._tasks;
  }

  public addTask(newTask: Task) {
    this.transform(newTask);
    this._tasks.push(newTask);
  }

  private transform(task: Task): Task {
    task.type="note";
    return task;
  }

  public getAll(): Observable<any>{
    return this.httpClient.get("https://jsonplaceholder.typicode.com/todos");
  };
}
