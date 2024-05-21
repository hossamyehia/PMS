import { Component } from '@angular/core';
import { TokenService } from 'src/app/core';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {







  userName:string = ''
  constructor(private _TokenService:TokenService){}

  ngOnInit(): void {
    this.userName = this._TokenService.getName();
  }







}
