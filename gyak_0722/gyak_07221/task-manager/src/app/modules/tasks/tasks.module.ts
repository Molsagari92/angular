import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportantTasksComponent } from './components/important-tasks/important-tasks.component';
import { OtherTasksComponent } from './components/other-tasks/other-tasks.component';



@NgModule({
  declarations: [ImportantTasksComponent, OtherTasksComponent],
  imports: [
    CommonModule
  ]
})
export class TasksModule { }
