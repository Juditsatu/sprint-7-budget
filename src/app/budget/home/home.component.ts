import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BugdetService } from '../services/bugdet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor(public budgetService: BugdetService, private fb: FormBuilder) {}

  totalPrice: number = 0;
  totalPriceOptions: number = 0;
  webChecked: boolean = false;

  budgetForm: FormGroup = this.fb.group({
    web: [false],
    seo: [false],
    ads: [false],
  });

  submitBudget() {
    console.log(this.budgetForm.value);
    console.log('Total',this.totalPrice + this.totalPriceOptions)
  }

  ngOnInit(): void {
    
    this.budgetForm.get('web')?.valueChanges.subscribe((selected: boolean) => {
      this.webChecked = selected;
      this.budgetService.sumCheckboxOptions(selected, 500);
      this.calculateTotal();
    });

    this.budgetForm.get('seo')?.valueChanges.subscribe((selected: boolean) => {
      this.budgetService.sumCheckboxOptions(selected, 300);
      this.calculateTotal()
    });

    this.budgetForm.get('ads')?.valueChanges.subscribe((selected: boolean) => {
      this.budgetService.sumCheckboxOptions(selected, 200);
      this.calculateTotal()
    });

  }

  calculateTotal() {
    this.totalPrice = this.budgetService.totalPrice;
  }

}
