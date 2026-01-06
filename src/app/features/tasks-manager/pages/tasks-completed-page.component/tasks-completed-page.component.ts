import { Component } from '@angular/core';
import { TaskListComponent } from '../../components/task-list/task-list.component';

@Component({
  selector: 'app-tasks-completed-page.component',
  imports: [TaskListComponent],
  templateUrl: './tasks-completed-page.component.html',
  styleUrl: './tasks-completed-page.component.css',
})
export class TasksCompletedPageComponent {}
