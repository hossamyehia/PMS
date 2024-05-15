import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { iProject, iProjectResponse, iSearchableProject } from 'src/app/Modules/dashboard/shared/projects/models';
import { ProjectService } from 'src/app/Modules/dashboard/shared/projects/services/project.service';
import { TasksService } from 'src/app/Modules/dashboard/shared/tasks/services/tasks.service';
import { HelperService } from 'src/app/core';

@Component({
  selector: 'app-display-task',
  templateUrl: './display-task.component.html',
  styleUrls: ['./display-task.component.scss']
})
export class DisplayTaskComponent {

  view: string = 'false';
  id!: number;
  pageSize =1000 ;
  pageNumber =1 ;
  //for getting all projects
  params: iSearchableProject = {
    title: "",
    pageSize: this.pageSize,
    pageNumber: this.pageNumber,
  };
  Projectsdata:iProject[] =[];
  taskForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    employeeId :new FormControl('', [Validators.required]),
    projectId :new FormControl('', [Validators.required]),
  })

 


  constructor(
    private _ProjectService: ProjectService,private _TasksService:TasksService,
    private _route: ActivatedRoute,
    private _helperService: HelperService
  ) { }

  ngOnInit(): void {
    this.getAllProject();
  }

  onSubmit() {
    
  }

  onAdd(data: iProject): void {
    
  }

  onEdit(data: iProject): void {
    
  }

  getAllProject() {
    
     this._ProjectService.getAllProjects(this.params).subscribe({
      next: (res: iProjectResponse) => {
        console.log(res)
        this.Projectsdata = res.data;
      }
     });
  } 
    
}
