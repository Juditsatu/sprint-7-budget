import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BugdetService } from '../services/bugdet.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styles: []
})
export class PanelComponent implements OnInit {

  constructor( private budgetService: BugdetService ) { }

  @Output() onTotalEvent = new EventEmitter<number>(); 
  
  pricePages: number = 1;
  priceLanguages: number = 1;
  totalOptions: number = 0;

  ngOnInit(): void {
    // this.budgetService.addOptions(this.panelForm.value, this.panelForm.value.pages)
  }

  panelForm: FormGroup = new FormGroup({
    pages: new FormControl(1, [Validators.required, Validators.pattern(/^[1-9]\d*$/)]),
    languages: new FormControl(1, [Validators.required, Validators.pattern(/^[1-9]\d*$/)])
  })

  calculate() {
    this.budgetService.currentBudget(this.pricePages, this.priceLanguages)
  }

  add(id: string) {
    if (id === 'pages') {
      this.pricePages++;
      this.calculate();
    }
    if (id === 'languages') {
      this.priceLanguages++;
      this.calculate();
    }
  }

  substract(id: string, value: number) {
    if (id === 'pages' && value > 1) {
      this.pricePages--;
      this.calculate();
    }
    if (id === 'languages' && value > 1) {
      this.priceLanguages--;
      this.calculate();
    }
  }

  invalidField(field: string) {
    return this.panelForm.get(field)?.invalid &&
           this.panelForm.get(field)?.touched;
  }

}
