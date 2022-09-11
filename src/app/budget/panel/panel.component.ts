import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BugdetService } from '../services/bugdet.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styles: []
})
export class PanelComponent implements OnInit, OnDestroy {

  constructor(
    private budgetService: BugdetService,
    private fb: FormBuilder,
    ) { }

  @Input() totalPriceOptions!: number;
  @Output() showTotalEvent = new EventEmitter<number>(); 
  
  numPages: number = 1;
  numLanguages: number = 1;

  ngOnInit(): void {

    this.panelForm.get('pages')?.valueChanges.subscribe((numPages: number) => {
      const numLanguages = this.panelForm.get('languages')?.value;
      this.showTotalEvent.emit(this.budgetService.calculateWebOptions(numPages, numLanguages))
    });
    this.panelForm.get('languages')?.valueChanges.subscribe((numLanguages: number) => {
      const numPages = this.panelForm.get('pages')?.value;
      this.showTotalEvent.emit(this.budgetService.calculateWebOptions(numPages, numLanguages))
    });
    
  }

  ngOnDestroy(): void {
    this.showTotalEvent.emit(this.budgetService.calculateWebOptions(0, 0))
  }

  panelForm: FormGroup = this.fb.group({
    pages:      [1, [Validators.required, Validators.pattern(/^[1-9]\d*$/)]],
    languages:  [1, [Validators.required, Validators.pattern(/^[1-9]\d*$/)]],
  });

  add(id: string) {
    if (id === 'pages') {
      this.numPages++;
      // this.totalPriceOptions = this.numPages;
      // this.calculate();
    }
    if (id === 'languages') {
      this.numLanguages++;
      // this.totalPriceOptions = this.numLanguages;
      // this.calculate();
    }
  }

  substract(id: string, value: number) {
    if (id === 'pages' && value > 1) {
      this.numPages--;
      // this.totalPriceOptions = this.numPages;
      // this.calculate();
    }
    if (id === 'languages' && value > 1) {
      this.numLanguages--;
      // this.totalPriceOptions = this.numLanguages;
      // this.calculate();
    }
  }

  invalidField(field: string) {
    return this.panelForm.get(field)?.invalid &&
           this.panelForm.get(field)?.touched;
  }

}
