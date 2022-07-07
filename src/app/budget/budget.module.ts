import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PanelComponent } from './panel/panel.component';



@NgModule({
  declarations: [
    HomeComponent,
    PanelComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BudgetModule { }
