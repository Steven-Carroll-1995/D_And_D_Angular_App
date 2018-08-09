import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '../../node_modules/@angular/router';
import { AppLoginComponent } from './_components/app-login/app-login.component';
import { DashboardComponent } from './_components/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'login', component: AppLoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({

  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]

})

export class AppRoutingModule {}
