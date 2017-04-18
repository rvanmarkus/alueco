import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth-service";
import {AluecoUser} from "../../domain/user";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'profile-navigation',
  templateUrl: 'profile-navigation.component.html'
})
export class ProfileNavigationComponent implements OnInit {
  private $loggedInUser: Observable<AluecoUser>;

  constructor(private auth: AuthService) {
    this.$loggedInUser = this.auth.user;
  }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }
}
