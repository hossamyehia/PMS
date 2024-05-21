import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { iUser } from 'src/app/Modules/dashboard/model/iUser.model';
import { HelperService, iErrorResponse } from 'src/app/core';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-blocked-user',
  templateUrl: './blocked-user.component.html',
  styleUrls: ['./blocked-user.component.scss']
})
export class BlockedUserComponent {
  // _UserService: any;
  _helperService: any;
  userItem:string ='';
  userData:iUser | any;
  constructor(private _UserService:UserService,private _HelperService:HelperService,public dialog: MatDialog, 
    @Inject(MAT_DIALOG_DATA) public data:any){}


    
  toggleStatus(id: number){
    this._UserService.onToggleActivation(id).subscribe({
      next: (res: any) => {
        this._HelperService.openSnackBar("Operation Success")
      }, error: (err: iErrorResponse) => {
        this._HelperService.openSnackBar(this._HelperService.getErrorMessage(err));
      },
      complete: ()=>{
        this.getAllUsers();
      }
    })
  }
  getAllUsers() {
    throw new Error('Method not implemented.');
  }

  
  getUserById(id: number){
    this._UserService.getUserById(id).subscribe({
      next: (res) => {
        this.userData = res;
        console.log(res);

      }

    });
  }
  
}
