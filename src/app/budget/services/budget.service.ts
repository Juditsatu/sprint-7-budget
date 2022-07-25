import { Injectable } from '@angular/core';
import { Budget } from '../interface/budget.interface';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  
  public edited = false;

  totalPrice: number = 0;
  totalPriceOptions: number = 0;

  budgets: Budget[] = [
    { option: 'Una pàgina web', price: 500, id: 'web' },
    { option: 'Una consultoria SEO', price: 300, id: 'seo' },
    { option: 'Una campanya de Google Ads', price: 200, id: 'ads' },
  ];

  //sum budgets value on languages & pages
  add(value: number) {

    this.totalPriceOptions += value;

    if (this.totalPriceOptions <= 0) {
      this.totalPriceOptions = 0;
    }

  }

  constructor() { }
}
