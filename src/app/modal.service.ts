import { Injectable, Type } from '@angular/core';
import { ModalContentComponent, NgbdModalComponent } from './modal-component/modal-component.component';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { ComponentRef } from '@angular/core/src/linker/component_factory';

@Injectable()
export class ModalService {

  isactive: Boolean = false;
  closeResult: String = '';
  showhide() {
    this.isactive = this.isactive === false ? true : false;
  }
  constructor(private _activemodal: NgbActiveModal,
    private _modalService: NgbModal) { }

  open(source: String) {

    if (!this.isactive) {
      this.isactive = true;
      const modalRef = this._modalService.open(ModalContentComponent).result.then((result) => {
        console.log('closed in service');
        this.closeResult = `Closed with: ${result}`;
        this.isactive = false;
      }, (reason) => {
        this.isactive = false;
        this.closeResult = `Dismissed ${
          this.getDismissReason(reason)}`;
      });
      setTimeout(() => {
        document.getElementsByClassName('modal')[0].setAttribute('style', 'outline:none;');
      }, 10);
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
