import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { iPage, HelperService, iErrorResponse } from 'src/app/core';
import { DeleteComponent } from 'src/app/shared/components/delete/delete.component';
import { iSearchableTask } from '../../../shared/tasks/models/iSearchableTask.model';
import { TasksService } from '../../../shared/tasks/services/tasks.service';
import { iTaskResponse } from '../../../shared/tasks/models/iTaskResponse.model';



@Component({
  selector: 'app-taskes',
  templateUrl: './taskes.component.html',
  styleUrls: ['./taskes.component.scss']
})
export class TaskesComponent {

  //vars
  listOfTasks:any[] =[];
  StatusChanged:string ='';
  SearchValue :string = '';
  //pagination
  pagination: iPage = {
    pageSize: 10,
    pageNumber: 1,
    totalNumberOfRecords: 0,
    totalNumberOfPages: 0,
  }

  params: iSearchableTask = {
    title: "",
    status: '',
    pageSize: this.pagination.pageSize,
    pageNumber: this.pagination.pageNumber,
  };

  //table
  displayedColumns: string[] = ['Title', 'Status', 'User', 'Project', 'CreationDate', 'Action'];


  constructor(
    private _TasksService: TasksService,
    private _helperSerivce: HelperService,
    private _Router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllTasks();
  }

  getAllTasks() {
    //define params
    this.params.title = this.SearchValue;
    this.params.status = this.StatusChanged
    this._TasksService.getAllTasks(this.params).subscribe({
      next: (res: iTaskResponse) => {
        //console.log(res)
        this.listOfTasks = res.data;
        this.pagination = (({ pageSize,
          pageNumber,
          totalNumberOfRecords,
          totalNumberOfPages, ...rest }) => {
          return {
            pageSize,
            pageNumber,
            totalNumberOfRecords,
            totalNumberOfPages,
          }
        })(res)
      }, error: (err: iErrorResponse) => {

        this._helperSerivce.openSnackBar(this._helperSerivce.getErrorMessage(err));
      }
    })
  }
  //for paginaton 
  changePage(e: PageEvent) {
    this.params.pageNumber = e.pageIndex + 1;
    this.params.pageSize = e.pageSize;
    this.getAllTasks();
  }

  //for search 
  resetSearcgInput() {
    this.SearchValue = '';
    this.getAllTasks();
  }
  //delete Task 
  openDeleteDialog(deltedId: number) {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: { id: deltedId },
    });
    dialogRef.afterClosed().subscribe(result => {
      //check result 
      if (result) {
        this.deleteTaskbyID(result)
      }


    });
  }
  deleteTaskbyID(id: number) {
    this._TasksService.onDeleteTask(id).subscribe({
      next: (res) => {
        // console.log(res)
        this._helperSerivce.openSnackBar('Task has been Removed sucessfully')
      },
      error: (err : iErrorResponse) => {
        this._helperSerivce.openSnackBar(this._helperSerivce.getErrorMessage(err));
       },
      complete: () => {
        this.getAllTasks()
      },

    })
  }
}
