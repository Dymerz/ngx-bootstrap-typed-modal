// Angular modules
import { NgModule }              from '@angular/core';

// Directives
import { ModalWrapperDirective } from './modal-wrapper/modal-wrapper.directive';

// Components
import { ModalWrapperComponent } from './modal-wrapper/modal-wrapper.component';

@NgModule({
  declarations: [
    ModalWrapperComponent,
    ModalWrapperDirective
  ],
  exports: [
    ModalWrapperComponent
  ]
})
export class NgbTypedModalModule {}