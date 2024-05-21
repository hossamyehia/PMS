
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { TableModule } from './table/table.module';
import { DeleteComponent } from './components/delete/delete.component';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule ,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatDialogModule,
    RouterModule,
    TableModule,

  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatDialogModule,
    NavbarComponent,
    SidebarComponent,
    RouterModule,
    TableModule,
  ],
})
export class SharedModule { }
