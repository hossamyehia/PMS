import { Component, OnInit } from '@angular/core';
import { ITask } from '../../../shared/tasks/models';
import { TaskBoardService } from '../services/task-board.service';
import { HelperService } from 'src/app/core';
import { ItaskBoard } from '../model/taskBoard.model';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent implements OnInit {

//vars

  listOfTasks:ITask[] =[];
  currentTask :any ;

  constructor(private _TaskBoardService:TaskBoardService ,private _HelperService:HelperService

  ) {}

  //drag and drop

  ngOnInit(): void {
   this.getAlltasksForUser();
  }


//get all users 
  getAlltasksForUser(){
    this._TaskBoardService.getAllTaskForUser().subscribe({
      next:(res)=>{
       this.listOfTasks = res.data
      },
      error:(err)=>{
      this._HelperService.openSnackBar(err)
      },
      complete:()=>{
        
       
    }  
  })
    }
  //filter task depend on status
    filterTasks(status:string){
     return this.listOfTasks.filter(task => task.status == status)
    }

    //drag 
    onDrag(task :any){
     console.log('drag')
    this.currentTask = task ;
    }
    // drop 

    onDrop(event:any , statusOfTask:string){
      //console.log('droped');
      console.log(event)
      const dropedTask = this.listOfTasks.find(item => item.id === this.currentTask.id);
      if(dropedTask != undefined){
        //update Status
        dropedTask.status = statusOfTask;
        //console.log(dropedTask.status);

      //define params  for updating status 
      let params = {
        status :statusOfTask
      }
         this.updateTaskStatus(dropedTask.id , params)
      }
    }
    //update status
    
    updateTaskStatus(id:number , data:ItaskBoard){
    
      this._TaskBoardService.updateTaskStatus(id ,data).subscribe({
        next:(res)=>{
        console.log(res)
        },
        complete:()=>{
         
          this._HelperService.openSnackBar("Task status has been updated ")
        }
      });
    }
}
