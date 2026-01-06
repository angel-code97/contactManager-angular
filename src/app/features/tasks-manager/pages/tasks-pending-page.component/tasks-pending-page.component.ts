import { Component } from '@angular/core';
import { TaskListComponent } from '../../components/task-list/task-list.component';

@Component({
  selector: 'app-tasks-pending-page.component',
  imports: [TaskListComponent],
  templateUrl: './tasks-pending-page.component.html',
  styleUrl: './tasks-pending-page.component.css',
})
export class TasksPendingPageComponent {}
