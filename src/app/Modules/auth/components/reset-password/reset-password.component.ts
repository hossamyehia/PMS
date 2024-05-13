import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { iResetResponse, iReset } from '../../models/iReset.model';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  statusCode: number | null = null;

  hide: boolean = true;
  hideConfirm: boolean = true;

  resetForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/
      ),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/
      ),
    ]),
    seed: new FormControl('', [Validators.required]),
  });

  bgImagePath = "url('assets/images/bg1-1.png')";

  constructor(private _AuthService: AuthService) {}

  ngOnInit(): void {
    (document.querySelector('.auth-bg') as any).style.setProperty(
      '--imagePath',
      `${this.bgImagePath}`
    );
  }

  sendResetForm(): void {
    const data = this.resetForm.value;

    if (this.resetForm.valid) {
      this._AuthService.onReset(data).subscribe({
        next: (response: iResetResponse) => {
          console.log('Password reset successful', response.message, response.statusCode);
        },
        error: (error) => {
          console.error('Error resetting password', error);
          if (
            error.error &&
            error.error.additionalInfo &&
            error.error.additionalInfo.errors
          ) {
            const errors = error.error.additionalInfo.errors;

          }
        },
      });
    }

    // this._AuthService.onReset(data).subscribe({
    //   next: (response: iResetResponse) => {
    //     // this.statusCode = response.statusCode;
    //     console.log('Password reset successful', response.message);
    //   },
    //   error: (error) => {
    //     this.statusCode = error.status;
    //     console.error('Error resetting password', error);
    //     if (error.error && error.error.additionalInfo && error.error.additionalInfo.errors) {
    //       const errors = error.error.additionalInfo.errors;
    //       this.errorMessage = Object.entries(errors)
    //         .map(([field, messages]) => {
    //           if (Array.isArray(messages)) { // Type checking for messages as array
    //             return `${field}: ${messages.join(', ')}`;
    //           }
    //           return `${field}: Invalid error format`; // Fallback message if not an array
    //         })
    //         .join('\n');
    //     } else {
    //       this.errorMessage = 'An unexpected error occurred.';
    //     }

  }
}
