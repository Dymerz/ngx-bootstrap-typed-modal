// Angular modules
import { Component }                 from '@angular/core';
import { Inject }                    from '@angular/core';
import { Input }                     from '@angular/core';
import { OnInit }                    from '@angular/core';
import { Type }                      from '@angular/core';
import { ViewChild }                 from '@angular/core';

// External modules
import { NgbTypedModal }             from '../helpers/ngb-typed-modal';
import { NgbTypedModalConfig }       from '../ngb-typed-modal.config';
import { ModalData }                 from '../types/modal-data.types';
import { ModalForm }                 from '../types/modal-form.types';
import { NgbTypedModalModuleConfig } from '../types/ngb-typed-model-module-config.type';
import { NgbActiveModal }            from '@ng-bootstrap/ng-bootstrap';

// Directives
import { ModalWrapperDirective }     from './modal-wrapper.directive';

@Component({
    selector: 'app-modal-wrapper',
    templateUrl: './modal-wrapper.component.html',
    standalone: true,
    imports: [ModalWrapperDirective]
})
export class ModalWrapperComponent implements OnInit {

  @Input() public component!    : Type<never>
  @Input() public componentData!: never
  @Input() public modalData!    : ModalData

  @ViewChild(ModalWrapperDirective, {static: true}) modalWrapperHost!: ModalWrapperDirective;

  constructor(
    @Inject(NgbTypedModalConfig) public config: NgbTypedModalModuleConfig,
    public readonly activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void
  {
    this.loadComponent()
  }

  public loadComponent()
  {
    const modalForm = new ModalForm(this.component, this.componentData);
    const viewContainerRef = this.modalWrapperHost.viewContainerRef;
    viewContainerRef.clear()

    const component = viewContainerRef.createComponent<NgbTypedModal<unknown, unknown>>(modalForm.component)
    component.instance.data = modalForm.data;
    component.instance.submitData.subscribe(this.activeModal.close)
    component.instance.submitClose.subscribe(this.activeModal.close)
  }

  public getStyleClasses(): string
  {
    if(typeof this.config.customClasses === 'string')
      return this.config.customClasses;
    else
      return this.config.customClasses.join(' ');
  }
}
