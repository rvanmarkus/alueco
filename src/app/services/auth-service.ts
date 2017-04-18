/**
 * Created by robbertvanmarkus on 18/04/17.
 */
import {Injectable} from '@angular/core';
import {
  AngularFire, AngularFireAuth, AuthMethods, AuthProviders, FirebaseAuthState,
  FirebaseListObservable, FirebaseObjectObservable
} from "angularfire2";
import {FormControl, FormGroup} from "@angular/forms";
import {AluecoUser} from "../../domain/user";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";

@Injectable()
export class AuthService {
  // private users: FirebaseListObservable<any[]>;
  public auth: AngularFireAuth;
  public user: Observable<AluecoUser>;
  private userSubscription: Subscription;

  constructor(private af: AngularFire) {
    this.auth = af.auth;
    this.user = this.auth
      .filter(auth => auth !== null)
      .map(auth => AluecoUser.fromAuthSession(auth));
  }

  loginWithGoogle(): firebase.Promise<FirebaseAuthState> {
    return this.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });
  }

  loginWithEmail(email, password) {
    return this.auth.login({
        email: email,
        password: password,
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      });
  }

  addUserInfo(){
    //We saved their auth info now save the rest to the db.
    // this.users.push({
    //   email: this.email,
    //   displayName: this.displayName
    // });
  }

  logout() {
    return this.af.auth.logout();
  }
}
