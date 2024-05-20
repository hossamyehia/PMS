import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUserModel } from 'src/app/Modules/dashboard/subModules/manager/users/models';
import { UserService } from 'src/app/Modules/dashboard/subModules/manager/users/services/user.service';
import { HelperService } from 'src/app/core';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.scss']
})
export class DisplayUserComponent {
  userId!:number ;
  userData!:IUserModel ;
  BaseUrl:string ='https://upskilling-egypt.com:3003/' ;
  dumyImage:string ='../../../../../../../../assets/images/profile.png';
  constructor( private _UserService:UserService , private _helperService:HelperService 
    ,private _ActivatedRoute:ActivatedRoute
  ){
      this.userId = this._ActivatedRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
   this.getUserById(this.userId);
  }

  getUserById(id: number) {
    this._UserService.getUserById(id).subscribe({
      next: (res) => {
         console.log(this.userData)
      },
      error: (err) => {
        this._helperService.openSnackBar(this._helperService.getErrorMessage(err));
      }
    });
  }

}
