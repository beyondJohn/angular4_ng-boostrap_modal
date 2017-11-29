import { Component, Input} from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-component',

  template: `

  <div class="modal-body">
    <p>Hello, {{name}}!</p>
    <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
  </div>

`,
  styleUrls: ['./modal-component.component.css']
})
export class ModalContentComponent {

  @Input() name;

  constructor(public activeModal: NgbActiveModal) { }

}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngbd-modal-component',
  templateUrl: './modal-component.component.html'
})
export class NgbdModalComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.componentInstance.name = 'JP';
  }
}
