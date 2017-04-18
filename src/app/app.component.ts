import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./services/auth-service";

@Component({
  selector   : 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./material-theme.scss', './app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public isLoggedIn: boolean;

  constructor(public authService: AuthService, private router: Router) {
    this.authService.auth.subscribe(
      (auth) => {
        if(auth == null) {
          console.log("Not Logged in.");

          this.isLoggedIn = false;
          this.router.navigate(['login']);
        }
        else {
          console.log("Successfully Logged in.");
          // Set the Display Name and Email so we can attribute messages to them
          this.isLoggedIn = true;
          this.router.navigate(['']);
        }
      }
    );

  }
}
