/**
 * Created by robbertvanmarkus on 18/04/17.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth-service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'login-page',
  templateUrl: 'login-page.component.html'
})
export class LoginPageComponent implements OnInit {
  private loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      'email': new FormControl(),
      'password': new FormControl()
    });
    this.loginForm.valueChanges.subscribe((e) => console.log('login form changes', e));
  }

  ngOnInit() {
  }

  onSubmit(e) {
    this.authService.loginWithEmail(
      this.loginForm.get('email').value,
      this.loginForm.get('password').value
    ).then((e) => {
      console.log('inloggen gelukt', e)

      this.router.navigate(['']);
    })
  }

  login() {
    this.authService.loginWithGoogle().then((data) => {
      // Send them to the homepage if they are logged in
      this.authService.addUserInfo();
      this.router.navigate(['']);
    })
  }
}
