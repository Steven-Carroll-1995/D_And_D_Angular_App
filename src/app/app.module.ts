import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppLoginComponent } from './_components/app-login/app-login.component';
import { AlertService } from './_services/alert-service.service';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { AppNavbarComponent } from './_components/app-navbar/app-navbar.component';
import { LoggedInService } from './_services/logged-in.service';

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    DashboardComponent,
    AppNavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    Title,
    AlertService,
    LoggedInService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
