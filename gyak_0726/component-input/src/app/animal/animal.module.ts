import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetComponent } from './pet/pet.component';
import { WildAnimalComponent } from './wild-animal/wild-animal.component';



@NgModule({
  declarations: [PetComponent, WildAnimalComponent],
  imports: [
    CommonModule
  ]
})
export class AnimalModule { }
