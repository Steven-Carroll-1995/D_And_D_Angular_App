import { Routes, RouterModule } from '@angular/router';

import { AppLoginComponent } from './_components/app-login/app-login.component';

const appRoutes: Routes = [
  { path: '', component: AppLoginComponent},
];
export const routing = RouterModule.forRoot(appRoutes);
