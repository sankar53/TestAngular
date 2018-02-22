import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { DashboardComponent } from './dashboard/dashboard.component';

import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'signup', component: SignupComponent },
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports:[
    RouterModule,
    FormsModule,
    BsDropdownModule,
    TooltipModule,
    ModalModule
  ],
  declarations: [
    LoginComponent,
    DashboardComponent,
    SignupComponent
  ]
})

export class AppRoutingModule { }
