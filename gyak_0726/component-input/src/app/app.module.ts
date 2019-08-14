import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProfessionComponent } from './work/profession/profession.component';
import {HouseworkComponent} from './work/housework/housework.component';
import{AllWorkComponent} from './work/all-work/all-work.component'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, ProfessionComponent, HouseworkComponent, AllWorkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
