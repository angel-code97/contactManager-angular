import { Routes } from '@angular/router';
import { TaskManagerPageComponent } from './features/tasks-manager/pages/task-manager-page.component/task-manager-page.component';
import { TaskCreatePageComponent } from './features/tasks-manager/pages/task-create-page.component/task-create-page.component';
import { TasksPendingPageComponent } from './features/tasks-manager/pages/tasks-pending-page.component/tasks-pending-page.component';
import { TasksCompletedPageComponent } from './features/tasks-manager/pages/tasks-completed-page.component/tasks-completed-page.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { TasksCategoryCreateComponent } from './features/tasks-manager/pages/tasks-category-create.component/tasks-category-create.component';
// import { ContactsPageComponent } from './features/contacts/pages/contacts-page.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full',
      },
      {
        path: 'tasks',
        component: TaskManagerPageComponent,
        data: {
          sectionText: 'Mis Tareas',
        },
      },
      {
        path: 'tasks/category',
        component: TasksCategoryCreateComponent,
        data: {
          sectionText: 'Categorías',
        },
      },
      {
        path: 'tasks/create',
        component: TaskCreatePageComponent,
        data: {
          sectionText: 'Crear Tarea',
        },
      },
      {
        path: 'tasks/pending',
        component: TasksPendingPageComponent,
        data: {
          sectionText: 'Tareas Pendientes',
        },
      },
      {
        path: 'tasks/completed',
        component: TasksCompletedPageComponent,
        data: {
          sectionText: 'Tareas Completas',
        },
      },
    ],
  },
  { path: '**', redirectTo: 'tasks' },
];
