import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RocketsComponent } from './components/rockets/rockets.component';
import { HistoryComponent } from './components/history/history.component';
import { LaunchesComponent } from './components/launches/launches.component';
import { HttpClientModule } from '@angular/common/http';
import { TurnBgBlueDirective } from './turn-bg-blue.directive';
import { TurnRedDirective } from './turn-red.directive';

@NgModule({
  declarations: [
    AppComponent,
    RocketsComponent,
    HistoryComponent,
    LaunchesComponent,
    TurnBgBlueDirective,
    TurnRedDirective
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
