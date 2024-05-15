import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { iTaskResponse } from '../models/iTaskResponse.model';
import { iTask } from '../models';
import { iSearchableTask } from '../models/iSearchableTask.model';



interface iParams extends iSearchableTask, HttpParams{}

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private _httpClient: HttpClient) { }

  getAllTasks(params: iSearchableTask): Observable<iTaskResponse>{
    return this._httpClient.get<iTaskResponse>('Task/manager', {params: (params as iParams)});
  }

  getTaskById(id: number): Observable<iTask>{
    return this._httpClient.get<iTask>(`Task/${id}`);
  }

  onAddProject(data: iTask): Observable<iTask>{
    return this._httpClient.post<iTask>('Task', data);
  }

  onEditProject(id:number, data: iTask): Observable<iTask>{
    return this._httpClient.put<iTask>(`Task/${id}`, data);
  }

  onDeleteProject(id:number){
    return this._httpClient.delete(`Task/${id}`);
  }
}
