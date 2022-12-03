// Angular modules
import { Type }        from '@angular/core';

// External modules
import { ModalData }   from './modal-data.types';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


/**
 * Type used to retype `componentInstance` and `result`
 */
export type NgbTypedModalRef<Component, Input, Output> = Omit<NgbModalRef, 'componentInstance'|'result'>  & {
  componentInstance: {
    component    : Type<Component>
    componentData: Input
    modalData    : ModalData
  },

  /**
   * The result of the modal, `null` if the user dismiss the modal.
   */
  result: Promise<Output|null>
}
