// Angular modules
import { EventEmitter } from '@angular/core';

// External modules
import { NgbModal }     from '@ng-bootstrap/ng-bootstrap';

// Helpers
import { ModalBuilder } from './modal-builder.helper';


export abstract class AbstractModal<DataInput, DataOutput>
{
  abstract data       : DataInput
  abstract submitData : EventEmitter<DataOutput>
  abstract submitClose: EventEmitter<never>

  make(ngModal: NgbModal): ModalBuilder<AbstractModal<DataInput, DataOutput>, DataInput, DataOutput>
  {
    return ModalBuilder.make<AbstractModal<DataInput, DataOutput>, DataInput, DataOutput>(ngModal);
  }
}