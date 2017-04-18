/**
 * Created by robbertvanmarkus on 18/04/17.
 */
import {Injectable} from '@angular/core';
import {
  AngularFire, AngularFireAuth, AuthMethods, AuthProviders, FirebaseAuthState,
  FirebaseListObservable, FirebaseObjectObservable
} from "angularfire2";
import {FormControl, FormGroup} from "@angular/forms";

@Injectable()
export class AuthService {
  private users: FirebaseListObservable<any[]>;
  public auth: AngularFireAuth;
  public displayName: string;
  public email: string;
  private user: FirebaseObjectObservable<any>;
  public loginForm: FormGroup;

  constructor(private af: AngularFire) {
    this.auth = af.auth;
    this.auth.subscribe(
      (auth) => {
        if (auth != null) {
          this.user = this.af.database.object('users/' + auth.uid);
          if(auth.google) {
            this.displayName = auth.google.displayName;
            this.email = auth.google.email;
          }
          else {
            this.displayName = auth.auth.email;
            this.email = auth.auth.email;
          }
        }

      });
    this.users = this.af.database.list('users');
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
    this.users.push({
      email: this.email,
      displayName: this.displayName
    });
  }

  logout() {
    return this.af.auth.logout();
  }
}
