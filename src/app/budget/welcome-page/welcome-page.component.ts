import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styles: []
})
export class WelcomePageComponent implements OnInit {

  constructor( private activateRoute: ActivatedRoute ) { }

  ngOnInit(): void {
  }

}
