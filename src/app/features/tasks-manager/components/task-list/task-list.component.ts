import { CommonModule } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { TaskModel } from '../../models/task.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  private router = inject(Router);
  tasksListInput = input<TaskModel[]>([]);
  tasksDeleteOutput = output<number>();
  tasksEditOutput = output<{ task: TaskModel; index: number }>();

  deleteTask(index: number) {
    this.tasksDeleteOutput.emit(index);
  }

  editTask(task: TaskModel, index: number) {
    // this.router.navigate(['tasks/create']);
    this.tasksEditOutput.emit({ task, index });
  }
}
