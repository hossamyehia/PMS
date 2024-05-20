import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Modules/auth/services/auth.service';
import { HelperService } from 'src/app/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {

  changePasswordForm:FormGroup = new FormGroup({
    oldPassword: new FormControl('' , [Validators.required ]) ,
    newPassword: new FormControl('' , [Validators.required  , 
       Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/)]) ,
       confirmNewPassword: new FormControl('' , [Validators.required ,
       Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/)]) 
   
   
  });
  constructor(private _AuthService:AuthService ,    private _helperSerivce: HelperService,
     private _router:Router ){}
      // to control eye of password
   isShownOLd:boolean = false;
   isShownNew:boolean= false;
   isConfirm:boolean=false
  ngOnInit(){
   
  }
 
  changePassword( userData:FormGroup){
  

  this._AuthService.onChangePassword(userData.value).subscribe({
  next:(res)=>{
    console.log(res);
   
    
  },
  error:(err)=>{
    this._helperSerivce.openSnackBar(this._helperSerivce.getErrorMessage(err));
  }
  ,complete:()=>{
    this._helperSerivce.openSnackBar('password has been Changed sucessfully')
    this._router.navigateByUrl('/dashboard/home')
    
  }
  
});
}
}
