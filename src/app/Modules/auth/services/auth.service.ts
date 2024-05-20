import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iForget, iLogin, iReset, iResetResponse, iVerify } from '../models';
import { Observable } from 'rxjs';
import { IchangePassword } from '../models/iChangePass.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient: HttpClient) { }

  login(data: iLogin){
    return this._httpClient.post("Users/Login", data);
  }

  register( data : FormData){
    return this._httpClient.post("Users/Register", data);
  }

  verify(data: iVerify){
    return this._httpClient.put("Users/verify", data);
  }

  onForget( data: iForget): Observable<any>{
    return this._httpClient.post("Users/Reset/Request", data);
  }

  onReset(data: iReset): Observable<any>{
    return this._httpClient.post("Users/Reset", data);
  }
  // onReset(data: iReset): Observable<iResetResponse>{
  //   return this._httpClient.post<iResetResponse>("Users/Reset", data);
  // }

  //changepassword
  onChangePassword(data: IchangePassword): Observable<any>{
    return this._httpClient.put("Users/ChangePassword", data);
  }
}
