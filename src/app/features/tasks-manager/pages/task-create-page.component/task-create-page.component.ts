import { Component, inject } from '@angular/core';
import { TaskFormComponent } from '../../components/task-form.component/task-form.component';
import { TaskModel } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-create-page',
  standalone: true, // ✅ FALTA
  imports: [TaskFormComponent],
  templateUrl: './task-create-page.component.html',
  styleUrl: './task-create-page.component.css',
})
export class TaskCreatePageComponent {
  taskService = inject(TaskService);

  guardar(task: TaskModel) {
    console.log('recibido del hijo', task);

    this.taskService.addTask(task);
  }
}
