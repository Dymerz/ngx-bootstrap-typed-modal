// Angular modules
import { Type }        from '@angular/core';

// External modules
import { ModalData }   from './modal-data.types';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


export type ModalComponentInstance<C, I, O> = Omit<NgbModalRef, 'componentInstance'|'result'>  & {
  componentInstance: {
    component    : Type<C>
    componentData: I
    modalData    : ModalData
  },
  result: Promise<O|undefined>
}
