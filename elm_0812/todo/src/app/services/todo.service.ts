import { Injectable } from "@angular/core";
import { Todo } from "../component/todo.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  editable: Todo;
  /* todos: Todo[] = [
    new Todo(1, "name1", "az"),
    new Todo(2, "legyenvalamiszép", "nagyonszép"),
    new Todo(3, "ásd fel a kertet bástya", "nagyon ásd")
  ]; */

  private backEndUrl = "http://192.168.5.20:4005/tasks/";

  id = 4;

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<any> {
    return this.httpClient
      .get(this.backEndUrl)
      .pipe(map(t => (t as Array<any>).map(item => this.mapToDo(item))));
  }

  public mapToDo(item) {
    return new Todo(item.id, item.name, item.message, new Date(item.createdAt));
  }

  public deleteTodo(id: number): Observable<any> {
    /*     this.todos = this.todos.filter(t => t.id != id);
    console.log(this.todos); */
    return this.httpClient.delete(this.backEndUrl + "/" + id);
  }

  public deleteTodos(arr: Array<number>) {}

  public add(todo: Todo): Observable<any> {
    /*  todo.id = this.id;
    console.log(todo);
    //this.todos.push(todo);
    this.id++; */
    return this.httpClient.post(this.backEndUrl, this.transformToTask(todo));
  }

  public transformToTask(todo: Todo): any {
    return { id: todo.id, name: todo.name, message: todo.description };
  }

  public update(todo: Todo): Observable<any> {
    /* for (let i = 0; i < this.todos.length; i++) {
      if (todo.id === this.todos[i].id) {
        this.todos[i].name = todo.name;
        this.todos[i].description = todo.description;
      }
    } */
    return this.httpClient.put(
      this.backEndUrl + "/" + todo.id,
      this.transformToTask(todo)
    );
  }

  public getTodo(id: number): Observable<any> {
    /* for (let i = 0; i < this.todos.length; i++) {
      if (+id === this.todos[i].id) {
        this.editable = new Todo(
          this.todos[i].id,
          this.todos[i].name,
          this.todos[i].description
        );
        return this.editable;
      }
    } */
    return this.httpClient
      .get(this.backEndUrl + "/" + id)
      .pipe(map(item => this.mapToDo(item)));
  }
}
