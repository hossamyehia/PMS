import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-forgotPassword',
  templateUrl: './forgotPassword.component.html',
  styleUrls: ['./forgotPassword.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  hide: boolean = true;
  requestForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  })

  bgImagePath = "url('assets/images/bg3.png')";

  constructor(private _AuthService:AuthService) {
   }

  ngOnInit() {
    (document.querySelector(".auth-bg") as any).style.setProperty("--imagePath", `${this.bgImagePath}`)
  }

  
  sendRequestForm(): void {
    const data = this.requestForm.value;

    if (this.requestForm.valid) {
      this._AuthService.onForget(data).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);

        }
      })
    }

  }

}
