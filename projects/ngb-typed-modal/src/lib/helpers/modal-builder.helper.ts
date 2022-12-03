// Angular modules
import { Type }                   from '@angular/core';

// External modules
import { ModalComponentInstance } from '../types/modal-component-instance.type';
import { NgbModal }               from '@ng-bootstrap/ng-bootstrap';
import { NgbModalOptions }        from '@ng-bootstrap/ng-bootstrap';

// Components
import { ModalWrapperComponent }  from '../modal-wrapper/modal-wrapper.component';


export class ModalBuilder<Component, Input, Output>
{
  private ngModal: NgbModal

  private title     : string = 'NO TITLE';
  private component?: Type<Component>
  private input?    : Input
  private size?     : NgbModalOptions['size']
  private isModal?  : boolean = false

  constructor(ngModal: NgbModal)
  {
    this.ngModal = ngModal;
  }

  static make<Component, Input, Output>(ngModal: NgbModal): ModalBuilder<Component, Input, Output>
  {
    return new ModalBuilder<Component, Input, Output>(ngModal)
  }

  public setTitle(title: string)
  {
    this.title = title;
    return this;
  }

  public setModal(modal: boolean)
  {
    this.isModal = modal
    return this;
  }

  public setComponent(component: Type<Component>): this
  {
    this.component = component;
    return this;
  }

  public setSize(size: 'sm' | 'lg' | 'xl'): this
  {
    this.size = size
    return this
  }

  public setInput(input: Input): this
  {
    this.input = input;
    return this;
  }

  public build(): ModalComponentInstance<Component, Input, Output>
  {
    if(!this.component)
      throw new Error('missing component, setComponent was not called')
    if(!this.input)
      throw new Error('missing input, setInput was not called')

    const modalRef = this.ngModal.open(ModalWrapperComponent, {
      centered     : true,
      backdrop     : this.isModal ? 'static': true,
      size         : this.size,
      beforeDismiss: (): boolean => { modalRef.close(); return true } // propagate the dismiss event to close event
    }) as ModalComponentInstance<Component, Input, Output>;

    modalRef.componentInstance.component     = this.component!
    modalRef.componentInstance.componentData = this.input
    modalRef.componentInstance.modalData     = { title: this.title }

    return modalRef
  }
}