import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor(public budgetService: BudgetService) {}

  add(value: number) {
    this.budgetService.totalPrice += value;
  }

  ngOnInit(): void {
  }

}
