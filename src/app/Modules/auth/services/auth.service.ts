import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iForget, iLogin, iReset, iVerify } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient: HttpClient) { }

  login(data: iLogin){
    return this._httpClient.post("Users/Login", data);
  }

  getCurrentUser(){
    return this._httpClient.get(`Users/currentUser`);
  }

  register( data : FormData){
    return this._httpClient.post("Users/Register", data);
  }

  verify(data: iVerify){
    return this._httpClient.put("Users/verify", data);
  }

  onForget( data: iForget){
    return this._httpClient.post("Users/Reset/Request", data);
  }

  onReset(data: iReset): Observable<any>{
    return this._httpClient.post("Users/Reset", data);
  }
}
