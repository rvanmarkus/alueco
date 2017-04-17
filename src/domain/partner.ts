import {Location} from "./order";

export interface AluecoPartnerVestiging {
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
