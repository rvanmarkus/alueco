import {IAluecoOrder, Location, IAluecoMaterial} from "../../domain/index";
import { AluecoMaterial } from './material';
import { FormBuilder, FormGroup } from '@angular/forms';
import {AluecoOrderLocation} from "./orderLocation";
import {AluecoContainer} from "./container";
import {AluecoPartner, AluecoPartnerVestiging} from "../../domain/partner";

export class AluecoOrder implements IAluecoOrder {
  partner?: AluecoPartner;
  vestiging?: AluecoPartnerVestiging;
  location:Location;
  containers: AluecoContainer[] = [];
  constructor(public preferredCollectionDate? : Date){

  }

  setLocation(location: AluecoOrderLocation){
    this.location = location;
  }
}
