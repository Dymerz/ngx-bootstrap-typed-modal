// Angular modules
import { ApplicationConfig }          from '@angular/core';
import { importProvidersFrom }        from '@angular/core';
import { BrowserModule }              from '@angular/platform-browser';

// External modules
import { provideNgbTypedModalConfig } from 'ngx-bootstrap-typed-modal';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      BrowserModule
    ),

    provideNgbTypedModalConfig({
      customClasses: ['text-light', 'bg-dark', 'border-dark']
    })
  ]
}
