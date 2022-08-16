import { Injectable } from '@angular/core';

export interface Budget {
  option: string;
  price: number;
  id: string;
}

@Injectable({
  providedIn: 'root'
})

export class BugdetService {

  totalPrice: number = 0;
  totalPriceOptions: number = 0;

  // budgets: Budget[] = [
  //   { option: 'Web page', price: 500, id: 'web' },
  //   { option: 'SEO service', price: 300, id: 'seo' },
  //   { option: 'Google Ads Campaign', price: 200, id: 'ads' },
  // ];

  sumCheckboxOptions(checked: boolean, price: number) {
    if (checked) {
      this.totalPrice += price;
    } else {
      this.totalPrice -= price;
    }
  }

  sumWebOptions(value: number) {
    if ('web') {
      this.totalPriceOptions = value;
    }
  }
}
