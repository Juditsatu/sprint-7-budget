import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BudgetModule } from './budget/budget.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BudgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
