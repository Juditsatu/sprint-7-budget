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

  totalPriceOptions: number = 0;
  totalPrice: number = this.totalPriceOptions;

  webOption: string = 'web';

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
      this.totalPrice += value;
  }

  //sum budgets value on languages & pages
  add(quantity: number, price: number) {

    this.totalPriceOptions += quantity * price;

    if (this.totalPriceOptions <= 0) {
      this.totalPriceOptions = 0;
    }

    console.log(this.totalPriceOptions)
  }
  
}
