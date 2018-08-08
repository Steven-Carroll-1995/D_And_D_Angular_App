import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppLoginComponent } from './_components/app-login/app-login.component';
import { AlertService } from './_services/alert-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    Title,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
