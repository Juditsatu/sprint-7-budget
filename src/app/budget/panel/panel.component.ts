import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { BugdetService } from '../services/bugdet.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor( public budgetService: BugdetService ) { }
  
  totalPricePanel: number = 0;

  ngOnInit(): void {
    // this.budgetService.addOptions(this.panelForm.value, this.panelForm.value.pages)
  }

  panelForm: FormGroup = new FormGroup({
    pages: new FormControl(1),
    languages: new FormControl(1)
  })

  add(id: string){

    if (id === 'pages') {
      this.panelForm.value.pages++;
    }

    if (id === 'languages') {
      this.panelForm.value.languages++;
    }

  }

  substract(id: string) {

    if (id === 'pages' && this.panelForm.value.pages > 1) {
      this.panelForm.value.pages--;
    }

    if (id === 'languages' && this.panelForm.value.languages > 1) {
      this.panelForm.value.languages--;
    }

  }

}
