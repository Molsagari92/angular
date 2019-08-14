import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DevelopComponent } from './develop/develop.component';
import { EngineerComponent } from './engineer/engineer.component';
import { TeacherComponent } from './teacher/teacher.component';

const VALTOZO: Routes= [
  {path:'', component: HeaderComponent},
  {path:'develop', component: DevelopComponent},
  {path:'engineer', component: EngineerComponent},
  {path:'teacher', component: TeacherComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DevelopComponent,
    EngineerComponent,
    TeacherComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(VALTOZO)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
