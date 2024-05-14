import { Component } from '@angular/core';
import { TokenService } from 'src/app/core';

interface IMenu {
  text: string;
  icon: string;
  link: string;
  isActive: boolean
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  menu: IMenu[] = [
    {
      text: 'Users',
      icon: 'fa-thin fa-user-group',
      link: '/dashboard/manager/users',
      isActive: this._TokenService.isManager()
    },
    {
      text: 'Projects',
      icon: 'fa-thin fa-objects-column',
      link: '/dashboard/manager/projects',
      isActive: this._TokenService.isManager()
    },
    {
      text: 'Tasks',
      icon: 'fa-thin fa-list-check',
      link: '/dashboard/manager/tasks',
      isActive: this._TokenService.isManager()
    },
    {
      text: 'Projects',
      icon: 'fa-thin fa-objects-column',
      link: '/dashboard/employee/projects',
      isActive: this._TokenService.isEmployee()
    },
    {
      text: 'Tasks',
      icon: 'fa-thin fa-list-check',
      link: '/dashboard/employee/tasks',
      isActive: this._TokenService.isEmployee()
    },
  ]

  constructor(private _TokenService: TokenService) { }
}
