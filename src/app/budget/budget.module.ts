import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { PanelComponent } from './panel/panel.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    HomeComponent,
    PanelComponent,
    ModalComponent
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
