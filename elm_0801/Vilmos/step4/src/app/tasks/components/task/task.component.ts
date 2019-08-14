import { Component, OnInit, Input, Output, EventEmitter, HostListener, Directive, Renderer2, ElementRef } from '@angular/core';
import { Task } from '../task-list/task-list.component';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input("task") task: Task;
  @Output() taskClick: EventEmitter<String> = new EventEmitter<String>();
  @Output() hundredStatus: EventEmitter<Number> = new EventEmitter<Number>();
  statusz: number = 0;

  constructor(private logService: LogService) { }

  ngOnInit() {
    this.logService.log(this.task.name);
  }

  onClick() {
    this.taskClick.next(this.task.name);
    this.statusz += 10;
    if (this.statusz === 100) {
      console.log("100!!");
      this.hundredStatus.next(this.statusz);

    }
    console.log(this.statusz);
  }

}
