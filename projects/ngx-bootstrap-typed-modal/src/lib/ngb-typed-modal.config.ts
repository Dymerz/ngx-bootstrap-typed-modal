// Angular modules
import { EnvironmentProviders }      from '@angular/core';
import { InjectionToken }            from '@angular/core';
import { makeEnvironmentProviders }  from '@angular/core';

// External modules
import { NgbTypedModalModuleConfig } from './types/ngb-typed-model-module-config.type';

export const NgbTypedModalConfig = new InjectionToken<NgbTypedModalModuleConfig>('NgbTypedModalConfig');

export function provideNgbTypedModalConfig(config: NgbTypedModalModuleConfig): EnvironmentProviders
{
  return makeEnvironmentProviders([
    {
      provide: NgbTypedModalConfig,
      useValue: config
    }
  ]);
}
