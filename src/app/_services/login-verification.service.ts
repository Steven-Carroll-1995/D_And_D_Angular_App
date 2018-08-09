import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginVerificationService {

  private testUsername: String = 'Test';
  private testPW: String = 'Test';

  private Success: String = 'Successful Login';
  private usernameFail: String = 'Wrong USername';
  private pwFail: String = 'Wrong Password';
  private tooShort: String = 'Password Too Short';

  constructor(private router: Router) { }

  verify(username: String, password: String, route: String) {

    if (password.length > 3) {
      if (username.toLowerCase() === this.testUsername.toLowerCase()) {
        if (password === this.testPW) {
            this.router.navigate(['/dashboard']);
          } else {
            return this.pwFail;
          }
        } else {
          return this.usernameFail;
        }
      } else {
      return this.tooShort;
    }

  }

}
