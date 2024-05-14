import { Component, ElementRef, ViewChild } from '@angular/core';
import { SizingHelperService } from 'src/app/core/services/sizingHelper/sizing-helper.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  @ViewChild("sidebar", { static: true })
  sideBar!: ElementRef;
  @ViewChild("navbar", { static: true })
  navBar!: ElementRef;
  @ViewChild("mainSection", { static: true })
  mainSection!: ElementRef;
  @ViewChild("RouteOutlet", { static: true })
  RouteOutlet!: ElementRef;

  height!: number;

  constructor(private _sizingHelper: SizingHelperService) { }

  ngOnInit(): void {
    this._sizingHelper.manageDashBoardSizing(this.sideBar, this.mainSection, this.RouteOutlet);
    // this._sizingHelper.data.subscribe({
    //   next: (newData)=>{
    //     this.height = newData.parentHeight;
    //   }
    // })
    this.sideBar.nativeElement.style.height = `${window.innerHeight - this.navBar.nativeElement.offsetHeight}px`;
    setTimeout(() => {
      this.sideBar.nativeElement.style.height = `${window.innerHeight - this.navBar.nativeElement.offsetHeight}px`;
    }, 1000)
  }

  cnLog(...messages: any) {
    console.log(...messages)
  }

}
