import {AluecoPartner} from "./partner";
import {FirebaseAuthState, FirebaseObjectObservable} from "angularfire2";
export class AluecoUser {
  displayName?: string;
  email?: string;
  partners?: AluecoPartner[];

  constructor(public uid: string) {

  }

  static fromAuthSession(auth: FirebaseAuthState) {
    let user = new AluecoUser(auth.uid);
    user.displayName = auth.auth.displayName || 'Unknown User';
    user.email = auth.auth.email;
    return user;
  }

  setPartners(partners: AluecoPartner[]){
    this.partners = partners;
  }
}
