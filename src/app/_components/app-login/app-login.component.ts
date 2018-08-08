// This Component Will Display The Login Screen
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {

  testUsername: String = 'Test';
  testPW: String = 'Test';

  constructor() { }

  ngOnInit() {
  }
  onClickSubmit(data) {

    if ( data.usernameid.toLowerCase() === this.testUsername.toLowerCase() && data.passwd === this.testPW) {

      alert('Successful Login');

     } else {
       alert('Unsuccessful Login');
     }

  }

}
