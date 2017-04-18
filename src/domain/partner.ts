import {Location} from "./order";

export interface AluecoPartnerVestiging {
  uid?: string;
  type;
  bedrijfsnaam: string;
  email?: string;
  telefoon?:string;
  adres: Location;
}
export interface AluecoPartner {
  bedrijfsnaam?: string;
  Vestigingen?;
}
