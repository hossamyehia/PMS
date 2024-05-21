import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask } from '../models';
import { ITaskData } from '../models/ITaskData.model';
import { ISearchableTask } from '../models/iSearchableTask.model';
import { ITaskResponse } from '../models/iTaskResponse.model';







interface iParams extends ISearchableTask, HttpParams{}

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private _httpClient: HttpClient) { }

  getAllTasks(params: ISearchableTask): Observable<ITaskResponse>{
    return this._httpClient.get<ITaskResponse>('Task/manager', {params: (params as iParams)});
  }

  getTaskById(id: number): Observable<ITask>{
    return this._httpClient.get<ITask>(`Task/${id}`);
  }

  onAddTask(data: ITaskData): Observable<ITask>{
    return this._httpClient.post<ITask>('Task', data);
  }

  onEditTask(id:number, data: ITaskData): Observable<ITask>{
    return this._httpClient.put<ITask>(`Task/${id}`, data);
  }
  onDeleteTask(id:number){
    return this._httpClient.delete(`Task/${id}`);
  }



}