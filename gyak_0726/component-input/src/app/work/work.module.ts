import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllWorkComponent } from './all-work/all-work.component';
import { ProfessionComponent } from './profession/profession.component';
import { HouseworkComponent } from './housework/housework.component';



@NgModule({
  declarations: [AllWorkComponent, ProfessionComponent, HouseworkComponent],
  imports: [
    CommonModule
  ]
})
export class WorkModule { }
