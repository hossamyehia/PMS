import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { iTaskResponse } from '../models/iTaskResponse.model';
import { iTask } from '../models';
import { iSearchableTask } from '../models/iSearchableTask.model';
import { iTaskData } from '../models/ITaskData.model';



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

  onAddTask(data: iTaskData): Observable<iTask>{
    return this._httpClient.post<iTask>('Task', data);
  }

  onEditTask(id:number, data: iTaskData): Observable<iTask>{
    return this._httpClient.put<iTask>(`Task/${id}`, data);
  }
  onDeleteTask(id:number){
    return this._httpClient.delete(`Task/${id}`);
  }

  getTaskCount():Observable<any>{
    return this._httpClient.get('Task/count')
  }

}
