import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskesRoutingModule } from './taskes-routing.module';
import { TaskesComponent } from './taskes.component';


@NgModule({
  declarations: [
    TaskesComponent
  ],
  imports: [
    CommonModule,
    TaskesRoutingModule
  ]
})
export class TaskesModule { }
