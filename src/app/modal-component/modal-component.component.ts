import { Component, Input } from '@angular/core';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-modal-component',

  template: `

  <div class="modal-body">
    <div class="margin">
      <p>Hello, {{name}}!</p>
      <div class="contentbody margin center">
        <div [innerHTML]="mycontent"></div>
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
    this.mycontent = '<h1>This is the main modal content</h1>';
  }
}

@Component({
  // tslint:disable-next-line:component-selector  <--seriously? tslint, hello?
  selector: 'ngbd-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.css']
})
export class NgbdModalComponent {

  // prepare component for transportation to modal service, insert it into an object
  component: Object = {'component': ModalContentComponent};

  constructor(private _modalservice: ModalService) { }

  open() {
    this._modalservice.open('login', this.component);
  }
}
