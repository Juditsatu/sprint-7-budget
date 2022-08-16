import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { PanelComponent } from './panel/panel.component';



@NgModule({
  declarations: [
    HomeComponent,
    PanelComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class BudgetModule { }
