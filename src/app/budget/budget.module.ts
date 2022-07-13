import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PanelComponent } from './panel/panel.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    PanelComponent,
    CheckboxComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class BudgetModule { }
