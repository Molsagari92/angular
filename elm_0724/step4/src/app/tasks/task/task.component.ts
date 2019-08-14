import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task-list/task-list.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() 
  task: Task;

  @Output() taskClicked: EventEmitter<number>= new EventEmitter<number>();
  @Output() taskAlert: EventEmitter<boolean>= new EventEmitter<boolean>();

  public statusz=0;

  constructor() { }

  ngOnInit() {}

  onClick(){
    console.log("asd");
    this.statusz+=10;
    if(this.statusz>=100){
      this.taskAlert.next(true);
    }
  }

}
