import { Component, OnInit } from '@angular/core';
import {Task} from '../task-list/task-list.component';
import {TaskService} from '../../services/task.service';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  public taskName: string;
  public taskOwner: string;

  constructor(private taskService: TaskService, private logService: LogService) {}
  

  ngOnInit() {}

  public onAdd() {
    this.taskService.addTask(new Task(this.taskName, this.taskOwner));
    this.taskName = null;
    this.taskOwner = null;
  }
}
