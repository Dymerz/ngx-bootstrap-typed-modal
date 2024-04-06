// Angular modules
import { ModuleWithProviders, NgModule }              from '@angular/core';

// Directives
import { ModalWrapperDirective } from './modal-wrapper/modal-wrapper.directive';

// Components
import { ModalWrapperComponent } from './modal-wrapper/modal-wrapper.component';
import { NgbTypedModalModuleConfig } from './types/ngb-typed-model-module-config.type'
import { ConfigService } from './services/config.service'

@NgModule({
  declarations: [
    ModalWrapperComponent,
    ModalWrapperDirective
  ],
  exports: [
    ModalWrapperComponent
  ]
})
export class NgbTypedModalModule
{
  public static forRoot(config?: Partial<NgbTypedModalModuleConfig>): ModuleWithProviders<NgbTypedModalModule>
  {
    return {
      ngModule: NgbTypedModalModule,
      providers: [
        ConfigService,
        {
          provide: 'config',
          useValue: config
        }
      ]
    };
  }
}