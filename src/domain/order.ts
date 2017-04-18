import {IAluecoMaterial} from "./Material";
import {AluecoUser} from "./user";
export interface IAluecoOrder {
  preferredCollectionDate? : Date;
  material? : IAluecoMaterial;
  location?: Location;
  orderBy?: AluecoUser;
}

export interface Location {
  address?;
  zipcode?;
  city?;
  country?;
}

