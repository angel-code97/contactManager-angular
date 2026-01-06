import { CommonModule } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { TaskModel } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  tasksListInput = input<TaskModel[]>([]);
  tasksDeleteOutput = output<number>();

  deleteTask(index: number) {
    this.tasksDeleteOutput.emit(index);
  }

  editTask(task: TaskModel, index: number) {}
}
