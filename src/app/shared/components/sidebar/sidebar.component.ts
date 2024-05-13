import { Component } from '@angular/core';
import { TokenService } from 'src/app/core';

interface IMenu{
  text:string;
  icon:string;
  link:string;
  isActive:boolean
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private _TokenService:TokenService){}

  menu: IMenu[] = [

    {
      text:'Users',
      icon:'fa-solid fa-user-group',
      link:'/dashboard/manager/users',
      isActive:this._TokenService.isManager()
    },
    {
      text:'Projects Manager',
      icon:'fa-solid fa-diagram-project',
      link:'/dashboard/manager/projects',
      isActive:this._TokenService.isManager()
    },
    {
      text:'Tasks Manager',
      icon:'fa-solid fa-list-check',
      link:'/dashboard/manager/tasks',
      isActive:this._TokenService.isManager()
    },
    {
      text:'Projects Emp',
      icon:'fa-solid fa-diagram-project',
      link:'/dashboard/employee/projects',
      isActive:this._TokenService.isEmployee()
    },
    {
      text:'Taskes Emp',
      icon:'fa-solid fa-list-check',
      link:'/dashboard/employee/tasks',
      isActive:this._TokenService.isEmployee()
    },
  ]
}
