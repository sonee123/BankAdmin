import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


import { AppRoutingModule }  from './app.routing';


import { LoginService } from './login.service';
import { AppointmentService } from './appointment.service';
import { UserService } from './user.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { LoginComponent } from './login/login.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { PrimaryTransactionComponent } from './primary-transaction/primary-transaction.component';
import { SavingsTransactionComponent } from './savings-transaction/savings-transaction.component';
import { AppointmentComponent } from './appointment/appointment.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    UserAccountComponent,
    PrimaryTransactionComponent,
    SavingsTransactionComponent,
    AppointmentComponent

    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],    
  providers: [LoginService,AppointmentService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
