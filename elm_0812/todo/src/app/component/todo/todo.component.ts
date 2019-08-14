import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Todo } from "../todo.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  @Input()
  todo: Todo;

  @Output()
  deleteClick: EventEmitter<number> = new EventEmitter<number>();
  editClick: EventEmitter<number> = new EventEmitter<number>();

  constructor(private router: Router) {}

  ngOnInit() {}

  public delete() {
    this.deleteClick.emit(this.todo.id);
  }

  public edit() {
    this.router.navigate(["/todoedit", this.todo.id]);
  }
}
