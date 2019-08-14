import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { LoggerService } from '../../shared/logger.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public tasks: Task[] = [
    new Task('Konyhafelújítás', 0, 'A konyha felújítása', 1),
    new Task('Ajtók cseréje', 10, 'Ajtócserék, surprise!', 2),
    new Task('Betonozás', 20, 'Az udvar ne füves legyen, hanem betonnal borított!', 3)
  ];

  constructor(private taskService: TaskService, private loggerService: LoggerService) { }

  ngOnInit() {
    this.taskService.getAll()
    .map(this.mapTodo)
    .subscribe((data) => {
      this.loggerService.log(data);
    });
  }

  mapTodo(todos: Todo[]) : Task[] {
    return todos.map(t => new Task(t.title, t.completed ? 100 : 0, '', 4));
  }

  onStateHundred(task: Task) {
    alert(`${task.name} elérte a 100-at!`);
  }

  onTaskChanged(task: Task) {
    this.tasks[0] = task;
  }

}

class Todo {
  public userId: number;
  public id: number;
  public title: string;
  public completed: number;
}