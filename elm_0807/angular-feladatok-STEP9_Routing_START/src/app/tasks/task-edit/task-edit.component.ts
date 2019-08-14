import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from '../task.model';
import { TaskListComponent } from '../task-list/task-list.component';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  taskID: number;
  taskName: string;
  taskState: number;
  taskDescription: string;

  constructor(private service : TaskService, private route : ActivatedRoute, private router : Router) { }

  public task: Task;


  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
      console.log(this.service.get(params.id));
    }
    );
  }

  onClick(){
    this.router.navigate(['tasks']);
  }

  onSubmit(){
    this.task=new Task(this.taskName, this.taskState, this.taskDescription, 6)
    this.service.save(this.task);
  }

}
