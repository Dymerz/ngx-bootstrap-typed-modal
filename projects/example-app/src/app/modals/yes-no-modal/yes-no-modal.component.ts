// Angular modules
import { Component }     from '@angular/core';
import { OnInit }        from '@angular/core';

// External modules
import { NgbTypedModal } from 'ngx-bootstrap-typed-modal';


type DataInput = {
  username: string
}

type DataOutput = {
  response: 'yes' | 'no'
}

@Component({
    selector: 'app-yes-no-modal',
    templateUrl: './yes-no-modal.component.html',
    standalone: true
})
export class YesNoModalComponent extends NgbTypedModal<DataInput, DataOutput> implements OnInit {

  constructor() {
    super()
  }

  ngOnInit(): void {

  }

  onYesClicked(): void {
    this.submitData.emit({response: 'yes'})
  }

  onNoClicked(): void {
    this.submitData.emit({response: 'no'})
  }
}
