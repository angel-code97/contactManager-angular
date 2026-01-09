import { Component, inject, computed } from '@angular/core';
import { TaskListComponent } from '../../components/task-list/task-list.component';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { TaskModel } from '../../models/task.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogContent } from '../../../../shared/components/dialog-content/dialog-content';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-manager-page',
  imports: [TaskListComponent],
  templateUrl: './task-manager-page.component.html',
  styleUrl: './task-manager-page.component.css',
})
export class TaskManagerPageComponent {
  private router = inject(Router);
  readonly dialog = inject(MatDialog);

  private route = inject(ActivatedRoute);
  private taskService = inject(TaskService);

  tasks = this.taskService.tasks();

  select({ task, index }: { task: TaskModel; index: number }) {
    this.taskService.selectTask(task, index);
    this.router.navigate(['tasks/create']);
  }

  deleteTask(i: number) {
    this.openDialog(i);
  }

  openDialog(i: number) {
    const dialogRef = this.dialog.open(DialogContent, {
      data: {
        title: 'Estás seguro de eliminar la Tarea?',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      if (result === true) {
        this.taskService.deleteTask(i);
      }
    });
  }

  // filter = computed(() => {
  //   const path = this.route.snapshot.routeConfig?.path;

  //   if (path === 'tasks/create') return 'create';
  //   if (path === 'tasks/pending') return 'pending';
  //   if (path === 'tasks/completed') return 'completed';
  //   return 'all';
  // });

  // tasks = computed(() => {
  //   const all = this.taskService.tasks();
  //   if (this.filter() === 'pending') {
  //     console.log('pendientes');
  //     return all().filter((t) => !t.completed);
  //   }

  //   if (this.filter() === 'completed') {
  //     console.log('completos');
  //     return all().filter((t) => t.completed);
  //   }

  //   return all();
  // });
}
