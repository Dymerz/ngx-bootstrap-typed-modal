// Angular modules
import { EventEmitter } from '@angular/core';

// External modules
import { NgbModal }     from '@ng-bootstrap/ng-bootstrap';

// Helpers
import { ModalBuilder } from './modal-builder.helper';


export class NgbTypedModal<DataInput, DataOutput>
{
  data!       : DataInput
  submitData  = new EventEmitter<DataOutput>()
  submitClose = new EventEmitter<never>()

  make(ngModal: NgbModal): ModalBuilder<NgbTypedModal<DataInput, DataOutput>, DataInput, DataOutput>
  {
    return ModalBuilder.make<NgbTypedModal<DataInput, DataOutput>, DataInput, DataOutput>(ngModal);
  }
}