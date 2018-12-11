import { ModuleWithProviders,NgModule }  from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { PrimaryTransactionComponent } from './primary-transaction/primary-transaction.component';
import { SavingsTransactionComponent } from './savings-transaction/savings-transaction.component';

import { AppointmentComponent } from './appointment/appointment.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
  	path: 'login',
  	component: LoginComponent
  },
  {
  	path: 'app-user-account',
  	component: UserAccountComponent
  },
  {
    path: 'primaryTransaction/:username',
    component: PrimaryTransactionComponent
  },
  {
    path: 'savingTransaction/:username',
    component: SavingsTransactionComponent
  },
  {
    path: 'appointment',
    component: AppointmentComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

