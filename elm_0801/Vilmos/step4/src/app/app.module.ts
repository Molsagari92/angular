import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TaskListComponent } from './tasks/components/task-list/task-list.component';
import { TaskComponent } from './tasks/components/task/task.component';
import { SzinesStringComponent } from './szines-string/szines-string.component';
import { TaskService } from './tasks/services/task.service';
import { AddTaskComponent } from './tasks/components/add-task/add-task.component';
import { LogService } from './tasks/services/log.service';
import { HttpClientModule } from '@angular/common/http';
import { BlueDirective } from './blue.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskListComponent,
    TaskComponent,
    SzinesStringComponent,
    AddTaskComponent,
    BlueDirective
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [
    TaskService, 
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
