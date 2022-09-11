import { Injectable } from '@angular/core';
import { Budget } from '../interface/budget.interface';

@Injectable({
  providedIn: 'root',
})
export class BugdetService {

  totalPriceOptions: number = 0;
  totalPrice: number = 0;
  budgetList: Budget[] = [];

  sumCheckboxOptions(checked: boolean, price: number) {
    if (checked) {
      this.totalPrice += price;
    } else {
      this.totalPrice -= price;
    }
  }

  showTotal(total: number): number {
    this.totalPriceOptions = total;
    return this.totalPrice +  this.totalPriceOptions;
  }

  calculateWebOptions(pages: number, languages: number): number {
    const totalOptions = (pages + languages) * 30;
    return totalOptions;
  }

  resetTotal() {
    this.totalPriceOptions = 0;
    this.totalPrice = 0;
  }

  saveToLocalStorage(list: Budget[]) {
    localStorage.setItem('list', JSON.stringify(list))
  }

  getListFromLocalStorage(key: string) {
    if (!localStorage.getItem(key)) {
      return;
    }
    JSON.parse(localStorage.getItem(key)!)
  }
  
}
