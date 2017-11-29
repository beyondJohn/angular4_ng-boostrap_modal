import { Component, Input} from '@angular/core';

import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-component',

  template: `

  <div class="modal-body">
    <div class="margin">
      <p>Hello, {{name}}!</p>
      <div class="contentbody margin center">
        <div class="margin" [innerHTML]="mycontent"></div>
      </div>
      <div class="footer">
        <button type="button" class="btn btn-outline-dark radius" (click)="activeModal.close('Close click')">Close</button>
      </div>
    </div>
  </div>

`,
  styleUrls: ['./modal-component.component.css']
})
export class ModalContentComponent {

  @Input() mycontent;
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {
    this.name = 'jp';
    this.mycontent = '<h1>This is the modal main content</h1>'
  }

}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngbd-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.css']
})
export class NgbdModalComponent {

  isopen = false;
  closeResult: string;
  constructor(private modalService: NgbModal) {}

  open() {

    if (!this.isopen) {
      this.isopen = true;
      const modalRef = this.modalService.open(ModalContentComponent).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
        this.isopen = false;
        console.log(`Closed with: ${result}`);
        console.log(modalRef);
      }, (reason) => {
        this.isopen = false;
        this.closeResult = `Dismissed ${
        this.getDismissReason(reason)}`; });
      // modalRef.componentInstance.name = 'JP';
      // modalRef.componentInstance.mycontent = '<h1>This is the modal main content</h1>';
    }
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      console.log('Hi');
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      console.log('Hello');
      return 'by clicking on a backdrop';
    } else {
      console.log('Hey');
      return `with: ${reason}`;
    }
  }
}
