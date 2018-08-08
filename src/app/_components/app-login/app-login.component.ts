// This Component Will Display The Login Screen
import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../_services/alert-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {

  testUsername: String = 'Test';
  testPW: String = 'Test';

  constructor(private alertService: AlertService) { }

  ngOnInit() {
  }
  onClickSubmit(data) {

    if ( data.usernameid.toLowerCase() === this.testUsername.toLowerCase() && data.passwd === this.testPW) {

      this.alertService.Error('Successful Login');

     } else {
      this.alertService.Error('Failed Login');
     }

  }

}
