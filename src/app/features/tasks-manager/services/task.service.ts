import { Injectable, signal } from '@angular/core';
import { TaskModel } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  // estado interno de las tasks en el service
  private tasks_Signal = signal<TaskModel[]>([]);

  //estado publico de las tasks para leer el valor solamente en cualquier componente
  tasks = this.tasks_Signal.asReadonly;

  //señal para recibir la tarea elegida a editar
  selectedTask = signal<{ task: TaskModel; index: number } | null>(null);

  //funcion para agregar tarea
  addTask(task: TaskModel) {
    this.tasks_Signal.update((t) => [...t, task]);
  }

  //funcion para eliminar tarea
  deleteTask(index: number) {
    this.tasks_Signal.update((t) => t.filter((_, i) => i !== index));
  }

  //funcion para asignar a la señal del selectedTask la tarea elegida
  selectTask(task: TaskModel, index: number) {
    this.selectedTask.set({ task, index });
  }

  updateTask(updated: TaskModel) {
    const selected = this.selectedTask();
    if (!selected) return;
    this.tasks_Signal.update((t) => t.map((task, i) => (i === selected.index ? updated : task)));
    this.selectedTask.set(null);
  }
}
