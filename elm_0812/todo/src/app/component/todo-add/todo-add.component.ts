import { Component, OnInit } from "@angular/core";
import { TodoService } from "src/app/services/todo.service";
import { Todo } from "../todo.model";
import { Router } from "@angular/router";
import { ErrorHandler } from "src/app/error-handler";

@Component({
  selector: "app-todo-add",
  templateUrl: "./todo-add.component.html",
  styleUrls: ["./todo-add.component.css"]
})
export class TodoAddComponent implements OnInit {
  public todo: Todo = {} as Todo;

  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit() {}

  onAdd() {
    this.todoService.add(this.todo).subscribe(
      () => {
        this.router.navigate(["todos"]);
      },
      error => ErrorHandler.handleError(error)
    );
  }
}
