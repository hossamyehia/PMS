import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  dummyNumbers = Array(5).fill(0).map((x, i) => i + 1);
  dummyTasks = Array(8).fill(0).map((x, i) => i + 1);

}
