import { Type } from '@angular/core'

export class ModalForm<T, D>
{
  constructor(public component: Type<T>, public data: D) {}
}