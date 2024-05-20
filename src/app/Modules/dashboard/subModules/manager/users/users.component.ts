import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { iPage, HelperService, iErrorResponse } from 'src/app/core';
import { iUserResponse } from '../../../shared/users/models/iUserResponse.model';
import { iSearchableUser } from '../../../shared/users/models/iSearchableUser.model';
import { UserService } from '../../../shared/users/services/user.service';
import { IUserModel } from '../../../shared/users/models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  //vars
  listOfUsers:IUserModel[] =[];
  StatusChanged:string ='';
  SearchValue :string = '';
  serachByID:string =''
  groupsID:string ='';

  //pagination
  pagination: iPage = {
    pageSize: 10,
    pageNumber: 1,
    totalNumberOfRecords: 0,
    totalNumberOfPages: 0,
  }

    params: iSearchableUser = {
      userName: "",
      email:"",
      country:"",
     groups:"",
    pageSize: this.pagination.pageSize,
    pageNumber: this.pagination.pageNumber,
  };
  
//table
displayedColumns: string[] = ['User Name', 'Status', 'Phone Number', 'Email' ,'Country','CreationDate' ,'Action'];


  constructor(
    private _UserService:UserService,
    private _helperSerivce: HelperService, 
    private _Router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    //define params
    this.params.groups= [this.groupsID];
    
    if(this.serachByID === 'name'){
      this.params.userName =this.SearchValue;
    }
     if(this.serachByID === 'email'){
      this.params.email =this.SearchValue;
    }
     if(this.serachByID === 'country'){
      this.params.country =this.SearchValue;
    }
    

   
    this._UserService.getAllUsers(this.params).subscribe({
      next: (res: iUserResponse) => {
        console.log(res)
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
      },
      complete:()=>{

      }
    })
  }
//for paginaton 
  changePage(e: PageEvent) {
    this.params.pageNumber = e.pageIndex + 1;
    this.params.pageSize = e.pageSize;
    this.getAllUsers();
  }
//for search 
  resetSearcgInput(){
    this.SearchValue= '';
    this.getAllUsers();
  }

 
}
