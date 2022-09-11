import { Component } from '@angular/core';
import { BugdetService } from '../services/bugdet.service';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styles: [
  ]
})
export class BudgetListComponent {

  constructor( private budgetService: BugdetService ) { }

  get budgetList() {
    return this.budgetService.budgetList;
  }

}
