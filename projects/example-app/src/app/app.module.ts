// Angular modules
import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';

// External modules
import { NgbModule }                from '@ng-bootstrap/ng-bootstrap';
import { NgbTypedModalModule }      from 'ngx-bootstrap-typed-modal';

// Components
import { AppComponent }             from './app.component';
import { HelloWorldModalComponent } from './modals/hello-world-modal/hello-world-modal.component';
import { YesNoModalComponent }      from './modals/yes-no-modal/yes-no-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldModalComponent,
    YesNoModalComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,          // should present, if not install `@ng-bootstrap/ng-bootstrap` first
    NgbTypedModalModule // <- add this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
