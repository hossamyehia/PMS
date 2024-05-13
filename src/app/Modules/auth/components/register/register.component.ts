import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  hide: boolean = true;
  hideConfirm: boolean = true;

  image!: File;
  url!: any;
  
  registerForm!: FormGroup;

  bgImagePath = "url('assets/images/bg1.png')";

  constructor(private _AuthService: AuthService) { }

  ngOnInit(): void {
      (document.querySelector(".auth-bg") as any).style.setProperty("--imagePath", `${this.bgImagePath}`);

      const DefaultValidators = [Validators.required];
      const PhoneNumberValidators = [...DefaultValidators, Validators.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)]
      const EmailValidators = [...DefaultValidators, Validators.email];
      const PasswordValidators = [...DefaultValidators, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/)];

      this.registerForm = new FormGroup({
        userName: new FormControl('', DefaultValidators),
        email: new FormControl('', EmailValidators),
        country: new FormControl('', DefaultValidators),
        phoneNumber: new FormControl('', PhoneNumberValidators),
        password: new FormControl('', PasswordValidators),
        confirmPassword: new FormControl('', PasswordValidators),
        profileImage: new FormControl(null)
      })
  }

  onSelect(event: any) {
    const files = event.target.files;
    if (files.length === 0)
        return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
        // this.message = "Only images are supported.";
        return;
    }

    const reader = new FileReader();
    this.image = files[0];
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
        this.url = reader.result; 
    }
  }


  sendRegisterForm(): void {
    const data = new FormData();

    for (let key in this.registerForm.value) {
      if (key === "profileImage") continue;
      data.append(key, this.registerForm.value[key]);
    }

    if (this.image) data.append("profileImage", this.image);

    if (this.registerForm.valid) {
      this._AuthService.register(data).subscribe({
        next: (res) => {
          console.log(res)
        },
        error: (err) => {
          console.log(err);

        }
      })
    }

  }

}
