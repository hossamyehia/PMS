import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { TokenService } from 'src/app/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = true;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/)])
  })

  bgImagePath = "url('assets/images/bg3.png')";
  
  constructor(private _AuthService: AuthService, private _TokenService:TokenService,
    private _Router:Router
  ) { }

  ngOnInit(): void {
      (document.querySelector(".auth-bg") as any).style.setProperty("--imagePath", `${this.bgImagePath}`)

  }

  sendLoginForm(): void {
    const data = this.loginForm.value;

    if (this.loginForm.valid) {
      this._AuthService.login(data).subscribe({
        next: (res) => {
          console.log(res);
          this._TokenService.setToken(res);
        },
        error: (err) => {
          console.log(err);
        },
        complete:()=>{
          this._Router.navigate(['/dashboard'])
        }
      })
    }

  }

}
