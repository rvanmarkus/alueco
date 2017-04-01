import {IAluecoMaterial} from "./Material";
export interface IAluecoOrder {
  preferredCollectionDate? : Date;
  material? : IAluecoMaterial;
  location?: Location;
}

export interface Location {
  address?;
  zipcode?;
  city?;
  country?;
}

