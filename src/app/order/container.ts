import {IContainer} from "../../domain/container";
import {FormBuilder} from "@angular/forms";

export class AluecoContainer implements IContainer {
  constructor(public type = 'open', public inhoud?, public naam?) {}
  toFormGroup(formBuilder : FormBuilder){
    return formBuilder.group({
      'type': this.type,
      'naam': this.naam,
      'inhoud' : this.inhoud,
    })
  }
}
