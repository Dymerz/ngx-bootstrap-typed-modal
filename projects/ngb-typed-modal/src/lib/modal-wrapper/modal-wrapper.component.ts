// Angular modules
import { Component }             from '@angular/core';
import { Input }                 from '@angular/core';
import { OnInit }                from '@angular/core';
import { Type }                  from '@angular/core';
import { ViewChild }             from '@angular/core';

// External modules
import { AbstractModal }         from '../helpers/abstract-modal';
import { ModalData }             from '../types/modal-data.types';
import { ModalForm }             from '../types/modal-form.types';
import { NgbActiveModal }        from '@ng-bootstrap/ng-bootstrap';

// Directives
import { ModalWrapperDirective } from './modal-wrapper.directive';


@Component({
  selector: 'app-modal-wrapper',
  templateUrl: './modal-wrapper.component.html'
})
export class ModalWrapperComponent implements OnInit {

  @Input() public component!    : Type<never>
  @Input() public componentData!: never
  @Input() public modalData!    : ModalData

  @ViewChild(ModalWrapperDirective, {static: true}) modalWrapperHost!: ModalWrapperDirective;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void
  {
    this.loadComponent()
  }

  public loadComponent()
  {
    const modalForm = new ModalForm(this.component, this.componentData);
    const viewContainerRef = this.modalWrapperHost.viewContainerRef;
    viewContainerRef.clear()

    const component = viewContainerRef.createComponent<AbstractModal<unknown, unknown>>(modalForm.component)
    component.instance.data = modalForm.data;
    component.instance.submitData.subscribe(this.activeModal.close)
    component.instance.submitClose.subscribe(this.activeModal.close)
  }
}
