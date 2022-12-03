// Angular modules
import { Type }                  from '@angular/core';

// External modules
import { NgbTypedModalRef }      from '../types/ngb-typed-modal-ref.type';
import { NgbModal }              from '@ng-bootstrap/ng-bootstrap';
import { NgbModalOptions }       from '@ng-bootstrap/ng-bootstrap';

// Components
import { ModalWrapperComponent } from '../modal-wrapper/modal-wrapper.component';


export class ModalBuilder<Component, Input, Output>
{
  private ngModal: NgbModal

  private title     : string = 'NO TITLE';
  private component?: Type<Component>
  private input?    : Input
  private size?     : NgbModalOptions['size']
  private force?    : boolean = false

  constructor(ngModal: NgbModal)
  {
    this.ngModal = ngModal;
  }

  /**
   * Create a `ModalBuilder` used to create and configure your modal.
   * @param ngModal
   * @returns ModalBuilder
   */
  static make<Component, Input, Output>(ngModal: NgbModal): ModalBuilder<Component, Input, Output>
  {
    return new ModalBuilder<Component, Input, Output>(ngModal)
  }

  /**
   * Set the modal `title`.
   * @param title
   * @returns ModalBuilder
   */
  public setTitle(title: string): this
  {
    this.title = title;
    return this;
  }

  /**
   * Set the `component` to place in the modal body.
   * @param component
   * @returns ModalBuilder
   */
  public setComponent(component: Type<Component>): this
  {
    this.component = component;
    return this;
  }

  /**
   * Set the `force` behavior.
   * @param force If false, the modal can be closed by clicking on the background. (default: false)
   * @returns ModalBuilder
   */
  public setForceMode(force: boolean = true): this
  {
    this.force = force
    return this;
  }

  /**
   * Set the modal `size`.
   * @param size
   * @returns ModalBuilder
   */
  public setSize(size: 'sm' | 'lg' | 'xl'): this
  {
    this.size = size
    return this
  }

  /**
   * Set the modal `input` to pass to the component.
   * @param input
   * @returns ModalBuilder
   */
  public setInput(input: Input): this
  {
    this.input = input;
    return this;
  }

  /**
   * Show the modal.
   * @returns NgbTypedModalRef
   */
  public show(): Omit<NgbTypedModalRef<Component, Input, Output>, 'componentInstance'>
  {
    if(!this.component)
      throw new Error('missing component, setComponent was not called')
    if(typeof this.input === 'undefined')
      throw new Error('Input was `undefined`, if it\'s indended set to null instead.')

    const modalRef = this.ngModal.open(ModalWrapperComponent, {
      centered     : true,
      backdrop     : this.force ? 'static': true,
      size         : this.size,
      beforeDismiss: (): boolean => { modalRef.close(null); return true } // propagate the dismiss event to close event
    }) as NgbTypedModalRef<Component, Input, Output>;

    modalRef.componentInstance.component     = this.component!
    modalRef.componentInstance.componentData = this.input
    modalRef.componentInstance.modalData     = { title: this.title }

    return modalRef
  }
}