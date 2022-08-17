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

  addOptions(id: string, quantity: number) {

    if (id === 'pages') {
      this.totalPriceOptions += quantity * 30;
    }

    if (id === 'languages') {
      this.totalPriceOptions += quantity * 30;
    }

    if (quantity < 1) {
      this.totalPriceOptions = 0;
    }

  }

  //sum budgets value on languages & pages
  calculateTotal(priceOptions: number, priceWeb: number): number {
    
    const totalPrice = priceOptions + priceWeb;

    console.log(totalPrice);

    return totalPrice;

  }
  
}
