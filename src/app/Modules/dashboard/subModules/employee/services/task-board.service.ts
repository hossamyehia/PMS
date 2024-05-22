import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItaskBoard } from '../model/taskBoard.model';

@Injectable({
  providedIn: 'root'
})
export class TaskBoardService {

  constructor(private _HttpClient:HttpClient) { }

  getAllTaskForUser() :Observable<any>{
    return this._HttpClient.get('Task/',{params:{pageSize:1000,pageNumber:1}})
  }

  updateTaskStatus(id:number , taskStatus:ItaskBoard):Observable<any>{
   return this._HttpClient.put(`Task/${id}/change-status`,taskStatus );
  }
}
