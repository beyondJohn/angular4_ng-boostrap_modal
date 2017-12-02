import { Injectable } from '@angular/core';
import { NgbModal, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class ModalService {

  isactive: Boolean = false;
  closeResult: String = '';

  constructor(
    private _activemodal: NgbActiveModal,
    private _modalService: NgbModal
  ) { }

  open(source: String, component: Object) {
    const componentref = component['component'];

    if (!this.isactive) {
      this.isactive = true;
      const modalref = this._modalService.open(componentref).result.then((result) => {
        console.log('service object listening for close event');
        this.isactive = false;
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.isactive = false;
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
      // remove blue glow when modal in focus in DOM
      setTimeout(() => {
        document.getElementsByClassName('modal')[0].setAttribute('style', 'outline:none;');
      }, 10);
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
