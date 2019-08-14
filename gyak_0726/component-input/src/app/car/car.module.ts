import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyCarComponent } from './company-car/company-car.component';
import { PersonalCarComponent } from './personal-car/personal-car.component';
import { SportCarComponent } from './sport-car/sport-car.component';



@NgModule({
  declarations: [CompanyCarComponent, PersonalCarComponent, SportCarComponent],
  imports: [
    CommonModule
  ]
})
export class CarModule { }
