import { Component, OnInit } from '@angular/core';
import { BugdetService } from '../services/bugdet.service';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styles: [
  ]
})
export class BudgetListComponent implements OnInit {

  constructor( private budgetService: BugdetService ) { }

  ngOnInit(): void {
   this.budgetService.getListFromLocalStorage('list');
  }

  get budgetList() {
    return this.budgetService.budgetList;
  }

  deleteBudget(index: number) {
    this.budgetList.slice(index, 1);
  }

  

}
