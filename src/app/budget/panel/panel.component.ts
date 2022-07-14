import { Component } from '@angular/core';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {

  constructor(public budgetService: BudgetService) {}

  value:number = 30;
  num: number = 1;

  add(value: number): void {
    this.budgetService.totalPrice += value;
    
    if (this.budgetService.totalPrice < 500) {
      this.budgetService.totalPrice = this.budgetService.budgets[0].price ;
    }
  }



}
