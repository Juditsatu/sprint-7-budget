import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Budget } from '../interface/budget.interface';
import { BugdetService } from '../services/bugdet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  
  constructor(
    private budgetService: BugdetService, 
    private fb: FormBuilder,
    private router: Router
    ) {}

  webChecked: boolean = false;

  get totalPrice() {
    return this.budgetService.totalPrice;
  }

  get totalPriceOptions() {
    return this.budgetService.totalPriceOptions;
  }

  get budgetList() {
    return this.budgetService.budgetList;
  }
 
  budgetForm: FormGroup = this.fb.group({
    budgetName: ['', Validators.required ],
    clientName: ['', Validators.required ],
    web: [false, Validators.required ],
    seo: [false, Validators.required ],
    ads: [false, Validators.required ],
  });


  ngOnInit(): void {
    
    this.budgetForm.get('web')?.valueChanges.subscribe((selected: boolean) => {
      this.webChecked = selected;
      this.budgetService.sumCheckboxOptions(selected, 500);
    });

    this.budgetForm.get('seo')?.valueChanges.subscribe((selected: boolean) => {
      this.budgetService.sumCheckboxOptions(selected, 300);
    });

    this.budgetForm.get('ads')?.valueChanges.subscribe((selected: boolean) => {
      this.budgetService.sumCheckboxOptions(selected, 200);
    });

  }

  invalidField(field: string) {
    return this.budgetForm.get(field)?.invalid &&
           this.budgetForm.get(field)?.touched;
  }

  submitBudget() {

    const newBudget: Budget = 
      {
        id:         this.budgetList.length + 1,
        budgetName: this.budgetForm.value.budgetName,
        clientName: this.budgetForm.value.clientName,
        date:       new Date(),
        total:      this.totalPrice + this.totalPriceOptions
      }

    if (this.budgetForm.valid) {
      this.budgetList.push(newBudget);
      this.router.navigate(['./budget-list']);
      this.budgetService.saveToLocalStorage(this.budgetList)
      this.budgetService.resetTotal();
      console.log(this.budgetList);
    }

    this.budgetForm.markAllAsTouched();
  }

  updateTotal(value: number): void {
    this.budgetService.showTotal(value);
  }

}
