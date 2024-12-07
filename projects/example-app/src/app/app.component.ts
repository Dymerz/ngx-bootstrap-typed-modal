// Angular modules
import { Component }                from '@angular/core';

// External modules
import { NgbModal }                 from '@ng-bootstrap/ng-bootstrap';

// Components
import { HelloWorldModalComponent } from './modals/hello-world-modal/hello-world-modal.component';
import { YesNoModalComponent }      from './modals/yes-no-modal/yes-no-modal.component';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true
})
export class AppComponent {
  title = 'example-app';

  constructor(private ngModal: NgbModal) {}

  public onHelloWorldClicked() {
    new HelloWorldModalComponent().make(this.ngModal)
      .setComponent(HelloWorldModalComponent)
      .setTitle('Greetings')
      .setInput(null)
      .show();
  }

  public onYesNoClicked() {
    const modalRef = new YesNoModalComponent().make(this.ngModal)
      .setComponent(YesNoModalComponent)
      .setTitle('Greetings')
      .setInput({username: 'Bob'})
      .setSize('lg')
      .setForceMode(true)
      .show();

    modalRef.result.then(result => {
      if(!result)
        return
      console.log(result.response)
    })
  }
}
