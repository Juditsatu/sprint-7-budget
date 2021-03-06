import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../services/budget.service';


@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html'
})

export class CheckboxComponent implements OnInit {

  constructor(public budgetService: BudgetService) {}
  
  onCheckboxChange(event: any) {
    if (event.target.checked) {
      this.budgetService.totalPrice += Number(event.target.value);
    } else {
      this.budgetService.totalPrice -= Number(event.target.value);
    }
  }

  // showPanel(index: number) {
  //   if (this.budgetService.budgets[index].id === 'web') {
  //     this.budgetService.edited;
  //     console.log(true)
  //   };
  // }

  submit() {
    console.log(this.budgetService.totalPrice);
  }

  ngOnInit(): void {}
}
