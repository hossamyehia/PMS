import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iProject, iSearchableProject, iProjectResponse } from '../models';
import { Observable } from 'rxjs';

interface iParams extends iSearchableProject, HttpParams{}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private _httpClient: HttpClient) { }

  getAllProjects(params: iSearchableProject): Observable<iProjectResponse>{
    return this._httpClient.get<iProjectResponse>('Project', {params: (params as iParams)});
  }

  getById(id: number): Observable<iProject>{
    return this._httpClient.get<iProject>(`Project/${id}`);
  }

  getProjectsByManager(params: iSearchableProject): Observable<iProjectResponse>{
    return this._httpClient.get<iProjectResponse>(`Project/manager`, {params: (params as iParams)});
  }

  getProjectsByEmployee(params: iSearchableProject): Observable<iProjectResponse>{
    return this._httpClient.get<iProjectResponse>(`Project/employee`, {params: (params as iParams)});
  }

  onAddProject(data: iProject): Observable<iProject>{
    return this._httpClient.post<iProject>('Project', data);
  }

  onEditProject(id:number, data: iProject): Observable<iProject>{
    return this._httpClient.put<iProject>(`Project/${id}`, data);
  }

  onDeleteProject(id:number){
    return this._httpClient.delete(`Project/${id}`);
  }
}
