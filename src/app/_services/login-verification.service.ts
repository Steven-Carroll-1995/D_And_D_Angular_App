import { Injectable } from '@angular/core';
import { markParentViewsForCheckProjectedViews } from '../../../node_modules/@angular/core/src/view/util';

@Injectable({
  providedIn: 'root'
})
export class LoginVerificationService {

  private testUsername: String = 'Test';
  private testPW: String = 'Test';

  private Success: String = 'Successfull Login';
  private Fail: String = 'Failed Login';

  constructor() { }

  verify(username: String, password: String) {

    if (username === this.testUsername.toLowerCase() && password === this.testPW) {
      return this.Success;
    } else {
      return this.Fail;
    }

  }

}
