import { Component, OnInit } from "@angular/core";
import { Todo } from "../todo.model";
import { TodoService } from "src/app/services/todo.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { ErrorHandler } from "src/app/error-handler";

@Component({
  selector: "app-todo-edit",
  templateUrl: "./todo-edit.component.html",
  styleUrls: ["./todo-edit.component.css"]
})
export class TodoEditComponent implements OnInit {
  public todo: Todo = {} as Todo;

  constructor(
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.todoService.getTodo(params.id).subscribe(
        adat => {
          this.todo = adat;
        },
        error => ErrorHandler.handleError(error)
      );
    });
  }

  onEdit(id: number) {
    this.todoService.update(this.todo).subscribe(
      () => {
        this.router.navigate(["todos"]);
      },
      error => ErrorHandler.handleError(error)
    );
  }

  onCancel(id: number) {
    this.router.navigate(["todos"]);
  }
}
