import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor(public budgetService: BudgetService) {}
  
  value:number = 30;
  num: number = 1;
  
  ngOnInit(): void {

    this.budgetService.add(this.value)
    
  }

  panelForm: FormGroup = new FormGroup({
    pages: new FormControl(1),
    languages: new FormControl(1)
  })


}
