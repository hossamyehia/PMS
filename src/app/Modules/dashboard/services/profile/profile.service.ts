import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iUser } from '../../model/iUser.model';
import { iChangePassword } from '../../model/iChangePass.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private _httpClient: HttpClient) { }

  getProfile():Observable<iUser>{
    return this._httpClient.get<iUser>(`Users/currentUser`);
  }

  updateProfile(data: FormData){
    return this._httpClient.put(`Users`, data);
  }

  onChangePassword(data: iChangePassword): Observable<any>{
    return this._httpClient.put("Users/ChangePassword", data);
  }
}
