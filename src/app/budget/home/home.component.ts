import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  selectedPosition(i: any) {
    console.dir(i)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
