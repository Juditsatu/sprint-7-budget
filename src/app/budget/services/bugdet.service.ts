import { Injectable } from '@angular/core';

export interface Budget {
  id: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})

export class BugdetService {

  totalPriceOptions: number = 0;
  totalPrice: number = 0;


  budgets: Budget[] = [
    { id: 'web', price: 500 },
    { id: 'seo', price: 300 },
    { id: 'ads', price: 200 },
    { id: 'pages', price: 30 },
    { id: 'language', price: 30 },
  ];

  sumCheckboxOptions(checked: boolean, price: number) {
    if (checked) {
      this.totalPrice += price;
    } else {
      this.totalPrice -= price;
    }
  }

  currentBudget(pages: number, languages: number) {
    this.totalPriceOptions = pages + languages;
  }

  //sum budgets value on languages & pages
  calculateTotal(): number {
    this.totalPrice += this.totalPriceOptions * 30;
    console.log(this.totalPrice, 'option', this.totalPriceOptions);

    return this.totalPrice;
  }

}
