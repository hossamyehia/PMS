import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

  hide: boolean = true;
  hideConfirm: boolean = true;

  resetForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/)],),
    seed: new FormControl(''),
  })

  bgImagePath = "url('assets/images/bg1-1.png')";

  constructor(private _AuthService: AuthService) { }

  ngOnInit(): void {
      (document.querySelector(".auth-bg") as any).style.setProperty("--imagePath", `${this.bgImagePath}`)

  }


  sendResetForm(): void {
    const data = this.resetForm.value;

    if (this.resetForm.valid) {
      this._AuthService.onReset(data).subscribe({
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
