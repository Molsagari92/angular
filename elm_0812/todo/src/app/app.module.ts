import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./component/header/header.component";
import { TodoComponent } from "./component/todo/todo.component";
import { TodoEditComponent } from "./component/todo-edit/todo-edit.component";
import { TodoListComponent } from "./component/todo-list/todo-list.component";
import { HomeComponent } from "./component/home/home.component";
import { TodoAddComponent } from "./component/todo-add/todo-add.component";
import { HttpClientModule } from "@angular/common/http";
import { OwnDatePipe } from './own-date.pipe';

const routes = [
  { path: "", component: HomeComponent },
  { path: "todos", component: TodoListComponent },
  { path: "todoadd", component: TodoAddComponent },
  { path: "todoedit/:id", component: TodoEditComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoComponent,
    TodoEditComponent,
    TodoListComponent,
    HomeComponent,
    TodoAddComponent,
    OwnDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
