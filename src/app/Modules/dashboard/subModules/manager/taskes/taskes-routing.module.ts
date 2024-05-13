import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskesComponent } from './taskes.component';

const routes: Routes = [{ path: '', component: TaskesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskesRoutingModule { }
