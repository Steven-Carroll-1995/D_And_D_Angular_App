import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 private LoggedIn = false;

  logIn(): void {
    this.LoggedIn = true;
  }

  isLoggedIn(): boolean {
    return this.LoggedIn;
  }

}
