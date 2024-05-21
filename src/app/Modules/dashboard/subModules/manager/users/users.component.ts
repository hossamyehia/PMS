import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { iPage, HelperService, iErrorResponse } from 'src/app/core';
import { iUserResponse } from './models/iUserResponse.model';
import { iSearchableUser } from './models/iSearchableUser.model';
import { UserService } from './services/user.service';
import { IUserModel } from './models';
import { BlockedUserComponent } from './components/blocked-user/blocked-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  //vars
  listOfUsers: IUserModel[] = [];
  StatusChanged: string = '';
  SearchValue: string = '';
  searchBy: "userName"| "email" | "country" | '' = ''
  groupsID: string = '';
  userItem: string ="";

  //pagination
  pagination: iPage = {
    pageSize: 10,
    pageNumber: 1,
    totalNumberOfRecords: 0,
    totalNumberOfPages: 0,
  }

  params: iSearchableUser = {
    userName: "",
    email: "",
    country: "",
    groups: "",
    pageSize: this.pagination.pageSize,
    pageNumber: this.pagination.pageNumber,
  };

  //table
  displayedColumns: string[] = ['User Name', 'Status', 'Phone Number', 'Email', 'Country', 'CreationDate', 'Action'];

  constructor(
    private _UserService: UserService,
    private _helperSerivce: HelperService,
    private _Router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.params = {
      ...this.params,
      groups: [this.groupsID],
      [this.searchBy]: this.SearchValue,
    };

    this._UserService.getAllUsers(this.params).subscribe({
      next: (res: iUserResponse) => {
        this.listOfUsers = res.data;
        this.pagination = (({ pageSize,
          pageNumber,
          totalNumberOfRecords,
          totalNumberOfPages, ...rest }) => {
          return {
            pageSize,
            pageNumber,
            totalNumberOfRecords,
            totalNumberOfPages,
          }
        })(res)
      }, error: (err: iErrorResponse) => {
        this._helperSerivce.openSnackBar(this._helperSerivce.getErrorMessage(err));
      }
    })
  }

  ///
  openDialog(userData:any): void {
    const dialogRef = this.dialog.open(BlockedUserComponent, {
      data: userData,
    });
    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      console.log(result);
      
      if(result){
        this.getAllUsers();
      }
    });
  }
///


  //for paginaton 
  changePage(e: PageEvent) {
    this.params.pageNumber = e.pageIndex + 1;
    this.params.pageSize = e.pageSize;
    this.getAllUsers();
  }
  //for search 
  resetSearchInput() {
    this.SearchValue = '';
    this.params = {
      ...this.params,
      [this.searchBy]: ''
    }
    this.getAllUsers();
  }

  resetParams(){
    this.params = {
      ...this.params,
      userName: '',
      country: '',
      email: '',
      [this.searchBy]: this.SearchValue
    }
  }

}
