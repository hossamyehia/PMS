import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent {
  constructor(private _AuthService:AuthService){}
  hide:boolean = true;

  verifyForm:FormGroup = new FormGroup({
    email:new FormControl('', [Validators.required, Validators.email]),
    code:new FormControl('', [Validators.required])
  })

  
    sendVerifyForm():void{
      const data = this.verifyForm.value;
  
      if(this.verifyForm.valid){
        console.log(data)
        this._AuthService.verify(data).subscribe({
          next:(res)=>{
            console.log(res);
           // console.log('verified')
          },
          error:(err)=>{
            console.log(err);
  
          }
        })
      }
  
    }
  }


