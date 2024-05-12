import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { VerifyComponent } from './components/verify/verify.component';

const routes: Routes = [{ path: '', component: AuthComponent } ,
{ path: 'verify', component: VerifyComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
