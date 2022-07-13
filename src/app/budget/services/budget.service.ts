import { Injectable } from '@angular/core';
import { Budget } from '../interface/budget.interface';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  
  totalPrice: number = 0;

  budgets: Budget[] = [
    { option: 'Una pàgina web', price: 500 },
    { option: 'Una consultoria SEO', price: 300 },
    { option: 'Una campanya de Google Ads', price: 200 },
  ];

  constructor() { }
}
