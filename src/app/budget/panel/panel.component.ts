import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { BugdetService } from '../services/bugdet.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor( public budgetService: BugdetService, private modalService: NgbModal ) { }

  quantity:number = 1;
  pricePerOption: number = 30;
  
  // formModal: any;

  ngOnInit(): void {

    // this.formModal = new window.bootstrap.modal

    this.budgetService.add(this.quantity, this.pricePerOption)
    
  }

  panelForm: FormGroup = new FormGroup({
    pages: new FormControl(1),
    languages: new FormControl(1)
  })

  addQuantity(value: number) {
    value += 1;
  }
  

  //Information Modal
  title = 'appBootstrap';

  closeResult!: string;

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismisse ${this.getDismissReason(reason)}`;
    })
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
