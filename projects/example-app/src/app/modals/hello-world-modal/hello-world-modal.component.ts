// Angular modules
import { Component }     from '@angular/core';
import { OnInit }        from '@angular/core';

// External modules
import { NgbTypedModal } from 'ngb-typed-modal';


type DataInput  = null
type DataOutput = null

@Component({
  selector: 'app-hello-world-modal',
  template: '<p>hello-world-modal works!</p>'
})
export class HelloWorldModalComponent extends NgbTypedModal<DataInput, DataOutput> implements OnInit {

  constructor() {
    super()
  }

  ngOnInit(): void {

  }
}
