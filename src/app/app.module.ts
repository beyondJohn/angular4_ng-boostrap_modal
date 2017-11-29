import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { ModalContentComponent, NgbdModalComponent } from './modal-component/modal-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalContentComponent,
    NgbdModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [NgbActiveModal],
  entryComponents: [ModalContentComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
