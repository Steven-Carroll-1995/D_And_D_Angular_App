import { Injectable } from '@angular/core';
import { markParentViewsForCheckProjectedViews } from '../../../node_modules/@angular/core/src/view/util';

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

  constructor() { }

  verify(username: String, password: String) {

    if (password.length > 3) {
      if (username.toLowerCase() === this.testUsername.toLowerCase()) {
        if (password === this.testPW) {
          return this.Success;
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
