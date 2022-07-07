import { Component, OnInit } from '@angular/core';
import { Budget } from '../interface/budget.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalPrice: number = 0;

  budgets: Budget[] = [
    {
      option: 'Una pàgina web',
      price: 500
    },
    {
      option: 'Una consultoria SEO',
      price: 300
    },
    {
      option: 'Una campanya de Google Ads',
      price: 200
    },
  ];

  toggleEditable(event: any) {
    if (event.target.checked) {
      this.totalPrice += 500;
    } else {
      this.totalPrice -= 500;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
