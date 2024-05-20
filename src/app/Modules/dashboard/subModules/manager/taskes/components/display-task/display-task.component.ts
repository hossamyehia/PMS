
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';
import { iUser } from 'src/app/Modules/dashboard/model/iUser.model';
import { iProject, iProjectResponse, iSearchableProject } from 'src/app/Modules/dashboard/shared/projects/models';
import { ProjectService } from 'src/app/Modules/dashboard/shared/projects/services/project.service';
import { iTask } from 'src/app/Modules/dashboard/shared/tasks/models';
import { iTaskData } from 'src/app/Modules/dashboard/shared/tasks/models/ITaskData.model';
import { TasksService } from 'src/app/Modules/dashboard/shared/tasks/services/tasks.service';
import { HelperService } from 'src/app/core';



@Component({
  selector: 'app-display-task',
  templateUrl: './display-task.component.html',
  styleUrls: ['./display-task.component.scss']
})
export class DisplayTaskComponent {

  view!: string ;
  disabledView =false;
  id!: number;
  //////
  pageSize =1000 ;
  pageNumber =1 ;
  //for getting all projects
  params: iSearchableProject = {
    title: "",
    pageSize: this.pageSize,
    pageNumber: this.pageNumber,
  };
  //for getting users
  userParams: any = {
    groups: 2,
    pageSize: this.pageSize,
    pageNumber: this.pageNumber,
  };///////data 

  Projectsdata:iProject[] =[];
  UsersData:iUser[]=[];
  ///for updating task
  updatingTaskData!:iTask;
///form 
  taskForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    employeeId :new FormControl('', [Validators.required]),
    projectId :new FormControl('', [Validators.required]),
  });
//auto complete project 

 


  constructor(
    private _ProjectService: ProjectService,private _TasksService:TasksService,
    private _route: Router,
    private _helperService: HelperService ,private _ActivatedRoute: ActivatedRoute
  ) { 
    this.id = this._ActivatedRoute.snapshot.params['id'];
    this.view =this._ActivatedRoute.snapshot.params['mood']
    //console.log(this.view)
    if (this.id) {
      //edit 
      this.getTaskById(this.id);

    }
    // to remove save button in view mode and disable the fields 
    if(this.view){
     this.disabledView=true
    }

  }

  ngOnInit(): void {
    this.getAllProject();
    this.getAllUsers();
    //

   
  }



  ///get by id 

  getTaskById(id: number) {
    this._TasksService.getTaskById(id).subscribe({
      next: (res) => {
        //console.log(res);
        this.updatingTaskData = res;
      },
      error: (err) => {
        this._helperService.openSnackBar(this._helperService.getErrorMessage(err));
        
      },
      complete: () => {
      //patching values
      this.taskForm.patchValue({
        title: this.updatingTaskData.title,
        description: this.updatingTaskData.description,
        employeeId: this.updatingTaskData.employee?.id,
        projectId: this.updatingTaskData.project?.id,
      });
       
      }

    });
  }




  onSubmit(data:FormGroup) {
    //console.log(data.value)
 
    if (this.id) {
      // -update  
      this.onEdit(this.id, data.value);
    }
    else {
      /// add new task 
      this.onAdd(data.value);
    }
  }

  onAdd(data:iTaskData): void {
   
      this._TasksService.onAddTask(data).subscribe( {
        next: (res) => {
         
      }, error: (err) => {
        this._helperService.openSnackBar(this._helperService.getErrorMessage(err));
  
      }, complete: () => {
        this._helperService.openSnackBar("Task has been added Successfully");
        this._route.navigateByUrl('/dashboard/manager/tasks')
      }
      });
    
  }

  onEdit( id:number , tasksData: iTaskData ) {
      this._TasksService.onEditTask(id , tasksData ).subscribe({
        next: (res) => {
       console.log(res);
        }, error: (err) => {
          this._helperService.openSnackBar(this._helperService.getErrorMessage(err));
        }, complete: () => {
          this._helperService.openSnackBar("Task has been updated Successfully");
          this._route.navigateByUrl('/dashboard/manager/tasks');
          
        }
      });
    }
  

  getAllProject() {
    
     this._ProjectService.getAllProjects(this.params).subscribe({
      next: (res: iProjectResponse) => {
        //console.log(res)
        this.Projectsdata = res.data;
      }
     });
  } 
  //need to be edited
  getAllUsers(){
    this._TasksService.getAllUsers(this.userParams).subscribe({
      next: (res: any) => {
        //console.log(res)
        this.UsersData = res.data;
      }
     });
  } 
  
    
}
