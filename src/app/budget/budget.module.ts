import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { PanelComponent } from './panel/panel.component';
import { ModalComponent } from './modal/modal.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    PanelComponent,
    ModalComponent,
    WelcomePageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    HomeComponent
  ]
})
export class BudgetModule { }
