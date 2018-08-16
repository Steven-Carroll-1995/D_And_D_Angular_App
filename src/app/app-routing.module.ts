import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '../../node_modules/@angular/router';
import { AppLoginComponent } from './_components/app-login/app-login.component';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { LoggedInService } from './_services/logged-in.service';

const routes: Routes = [
  { path: 'login', component: AppLoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [LoggedInService] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({

  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]

})

export class AppRoutingModule {}
