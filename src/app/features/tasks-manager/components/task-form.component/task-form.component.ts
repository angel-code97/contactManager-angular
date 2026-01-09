import { CommonModule } from '@angular/common';
import { Component, effect, inject, output } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { MatSelectModule } from '@angular/material/select';
import { Validators, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TaskModel } from '../../models/task.model';

interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-task-form',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  constructor() {
    effect(() => {
      const selected = this.taskService.selectedTask();
      if (selected) {
        this.form.patchValue(selected.task);
      }
    });
  }

  sendTask = output<TaskModel>();

  private fb = inject(FormBuilder);
  private taskService = inject(TaskService);

  categorys: Category[] = [
    { value: 'work', viewValue: 'Trabajo' },
    { value: 'personal', viewValue: 'Personal' },
    { value: 'study', viewValue: 'Estudio' },
    { value: 'home', viewValue: 'Hogar' },
    { value: 'urgent', viewValue: 'Urgente' },
    { value: 'shopping', viewValue: 'Compras' },
    { value: 'health', viewValue: 'Salud' },
    { value: 'project', viewValue: 'Proyecto' },
  ];

  selectedTask = this.taskService.selectedTask;

  form = this.fb.nonNullable.group({
    title: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
    description: ['', [Validators.minLength(4), Validators.maxLength(70)]],
    category: ['', [Validators.required]],
    // completed: [false],
  });

  get title() {
    return this.form.controls.title;
  }

  get description() {
    return this.form.controls.description;
  }

  get category() {
    return this.form.controls.category;
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.sendTask.emit(this.form.getRawValue() as TaskModel);
    this.form.reset();

    // if (this.selectedTask()) {
    //   //esta en edicion
    //   this.taskService.updateTask(this.form.getRawValue());
    //   this.form.reset();
    // } else {
    //   //solo guarda nuevos
    //   this.taskService.addTask(this.form.getRawValue());
    //   this.form.reset();
    // }
  }
}
