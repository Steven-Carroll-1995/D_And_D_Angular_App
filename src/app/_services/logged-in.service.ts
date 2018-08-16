import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInService implements CanActivate {
  constructor(private userService: UserService, private router: Router) {};

  canActivate() {
    if (this.userService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }


}
