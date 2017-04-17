import {AuthMethods, AuthProviders} from "angularfire2";
export const firebaseConfig = {
  apiKey: "AIzaSyBLGOZ01nc-5hjiSSiKlwlOgZ35Nx5W1BQ",
  authDomain: "alueco-860c4.firebaseapp.com",
  databaseURL: "https://alueco-860c4.firebaseio.com",
  storageBucket: "alueco-860c4.appspot.com",
  messagingSenderId: "609203336747"
};
export const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};
