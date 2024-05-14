import { Component } from '@angular/core';
import { AuthService } from 'src/app/Modules/auth/services/auth.service';
import { TokenService } from 'src/app/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  UserName: string = "";
  UserEmail: string = "";
  userData!: any;
  imgUrl: string = "";
  dummyImage: string = "assets/images/profile-user.png";
  BaseUrl = "https://upskilling-egypt.com:3003/"

  constructor(
    private _tokenService: TokenService,
    private _authservice: AuthService) {
  }

  ngOnInit(): void {
    this.UserName = this._tokenService.getName();
    this.UserEmail = this._tokenService.getEmail();
    this.getImageUrl()
  }

  getImageUrl() {
    this._authservice.getCurrentUser().subscribe({
      next: (res: any) => {
        this.userData = res;
        this.imgUrl = this.BaseUrl + res.imagePath;
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }


  logout() {
    this._tokenService.logout()
  }


}
