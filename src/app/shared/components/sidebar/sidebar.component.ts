import { Component, ElementRef, ViewChild } from '@angular/core';
import { TokenService } from 'src/app/core';
import { IMenu } from './model/IMenu.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  opened: boolean = false;
  @ViewChild("parElm", { static: true }) parElm!: ElementRef;
  @ViewChild("sect", { static: true }) sect!: ElementRef;
  
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

  constructor(private _TokenService:TokenService){}

  ngOnInit(): void {
    this.sect.nativeElement.style.width = `${this.parElm.nativeElement.offsetWidth}px`;
  }

  toggleSidebar() {
    this.parElm.nativeElement.classList.toggle("active-sidebar")
    this.sect.nativeElement.style.width = `${this.parElm.nativeElement.offsetWidth}px`;
    this.opened = !this.opened;
  }

}
