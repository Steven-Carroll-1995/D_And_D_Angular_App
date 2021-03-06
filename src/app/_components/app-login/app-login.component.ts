// This Component Will Display The Login Screen
import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../_services/alert-service.service';
import { Title } from '@angular/platform-browser';
import { LoginVerificationService } from '../../_services/login-verification.service';

@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {

  message: String = '';
  messageToShow = false;

  constructor(private alertService: AlertService,
              private titleService: Title,
              private loginService: LoginVerificationService) { }

  ngOnInit() {
    this.titleService.setTitle('Login');
  }
  onClickSubmit(data) {

   this.message = this.loginService.verify(data.usernameid.toLowerCase(), data.passwd, '/dashboard');
   this.messageToShow = true;

  }

}
