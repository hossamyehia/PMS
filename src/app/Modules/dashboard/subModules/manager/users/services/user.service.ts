import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iUserResponse } from '../models/iUserResponse.model';
import { iSearchableUser } from '../models/iSearchableUser.model';
import { Observable } from 'rxjs';

import { IUserModel } from '../models';


interface iParams extends iSearchableUser, HttpParams{}


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpClient: HttpClient) { }

  getAllUsers(params: iSearchableUser): Observable<iUserResponse>{
    return this._httpClient.get<iUserResponse>('Users/', {params: (params as iParams)});
  }

  getUserById(id: number): Observable<IUserModel>{
    return this._httpClient.get<IUserModel>(`Users/${id}`);
  }

  onToggleActivation(id:number){
    return this._httpClient.put(`Users/${id}`, {});
  }

  getUsersCount():Observable<any>{
    return this._httpClient.get('Users/count')
  }
}
