Angular Typed Bootstrap Modal
=============================


`ngx-bootstrap-typed-modal` add typing to the NgbModal of `@ng-bootstrap/ng-bootstrap`, this way you never loose your types when opening a modal!

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/dymerz/ngx-bootstrap-typed-modal/Node.js%20Package?style=flat-square)
[![npm Package](https://img.shields.io/npm/v/ngx-bootstrap-typed-modal.svg?color=red&style=flat-square)](https://www.npmjs.org/package/ngx-bootstrap-typed-modal)
[![npm Package](https://img.shields.io/npm/l/ngx-bootstrap-typed-modal.svg?color=red&style=flat-square)](https://www.npmjs.org/package/ngx-bootstrap-typed-modal)

Why
---
I don't want to see any `any` in my projects!


Installation
------------

    npm install ngx-bootstrap-typed-modal

Examples
--------

- [Hello World Modal](./projects/example-app/src/app/modals/hello-world-modal/hello-world-modal.component.ts)
- [Yes No Modal](./projects/example-app/src/app/modals/yes-no-modal/yes-no-modal.component.ts)

Usage
-----
```ts
const modalRef = new YesNoModalComponent().make(this.ngModal)
  .setComponent(YesNoModalComponent) // component to place in the modal
  .setTitle('Greetings')             // title
  .setInput({username: 'Bob'})       // pass inputs
  .setSize('lg')                     // defined the size
  .setForceMode(true)                // if the user can dismiss by clicking on the background
  .show();                           // show the modal

modalRef.result.then(result => {
  if(!result)
    return

  console.log(result.response)
})
```

Getting Started
---------------


Register the module.

`app.module`:
```ts
//...
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,          // should be present, if not install `@ng-bootstrap/ng-bootstrap`
    NgbTypedModalModule // <- add this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Generate a component
```bash
ng generate component example-modal
```

in the generated component, extend the class with `NgbTypedModal`:
```ts
import { Component }     from '@angular/core';
import { OnInit }        from '@angular/core';
import { NgbTypedModal } from 'ngx-bootstrap-typed-modal'; // <- import

// define input and output types
type DataInput  = { message: string }
type DataOutput = { response: 'yes' | 'no' }

@Component({
  selector: 'app-example-modal',
  template: `
    <h4>{{ data.message }}</h4>
    <button class="btn btn-danger" (click)="onNoClicked()">No</button>
    <button class="btn btn-success" (click)="onYesClicked()">Yes</button>
  `
})
export class ExampledModalComponent extends NgbTypedModal<DataInput, DataOutput> implements OnInit {

  constructor() {
    super() // call the super constructor
  }

  ngOnInit(): void {

  }

  onYesClicked(): void
  {
    // emit the 'yes' response
    this.submitData.emit({response: 'yes'})
  }

  onNoClicked(): void
  {
    // emit the 'no' response
    this.submitData.emit({response: 'no'})
  }
}
```

Open the modal
`app.component`:
```ts
import { Component }              from '@angular/core';
import { NgbModal }               from '@ng-bootstrap/ng-bootstrap';
import { ExampledModalComponent } from './example-modal.component';


@Component({
  selector: 'app-root',
  template: '<button (click)="onButtonClicked()">Open</button>'
})
export class AppComponent {
  title = 'example-app';

  constructor(
    private ngModal: NgbModal // inject the NgbModal in the component
  ) {}

  public onButtonClicked() {
    // this build the modal with parameters
    const modalRef = new ExampledModalComponent().make(this.ngModal)
      .setComponent(ExampledModalComponent)
      .setTitle('Greetings')
      .setInput({ message: 'Hello World!' })
      .show();

    modalRef.result.then(result => {
      if(!result)
        return

      console.log(result.response)
    })
  }
}
```

API
===

NgbTypedModal
-------------

Access input data from the component.
```ts
public data: Input
```

Submit result and close the modal.
```ts
public submitData: new EventEmitter<DataOutput>()
```


Close the modal.
```ts
public submitClose: new EventEmitter<never>()
```

Create a builder used to create and configure your modal.
```ts
public make(ngModal: NgbModal): ModalBuilder<NgbTypedModal<Input, Output>, Input, Output>
```


ModalBuilder
------------

Set the modal Title.
```ts
setTitle(title: string): ModalBuilder
```

Set the component to place in the modal body.
```ts
setComponent(component: Type<Component>): ModalBuilder
```

If false, the modal can be closed by clicking on the background. (default: false)
```ts
setForceMode(force: boolean = true): ModalBuilder
```

Set the modal size.
```ts
setSize(size: 'sm' | 'lg' | 'xl'): ModalBuilder
```

Set the modal input to pass to the component.
```ts
setInput(input: Input): ModalBuilder
```

Show the modal.
```ts
show(): NgbTypedModalRef<Component, Input, Output>
```

NgbTypedModalRef
----------------------

Get the output of the modal.
if the user `dismiss` the modal (e.g: by clicking on the `x` at the upper-right corner), `result` will be set to `null`.
```ts
result: Promise<O|null>
```

Store the modal state (should not be used).
```ts
componentInstance: {
  component    : Type<Component>
  componentData: Input
  modalData    : ModalData
},
```
