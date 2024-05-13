import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { VerifyComponent } from './components/verify/verify.component';
import { ForgotPasswordComponent } from './components/forgotPassword/forgotPassword.component';

@NgModule({
  declarations: [
    AuthComponent,
    VerifyComponent,
    LoginComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
