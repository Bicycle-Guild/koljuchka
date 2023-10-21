import { Routes } from '@angular/router';
import { SubjectComponent } from './admin/subject/subject.component';
import { SubjectsComponent } from './admin/subjects/subjects.component';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { TestComponent } from './admin/test/test.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((mod) => mod.HomeComponent),
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./admin/admin.component').then((mod) => mod.AdminComponent),
    children: [
      {
        path: '',
        redirectTo: 'subjects',
        pathMatch: 'full',
      },
      {
        path: 'subjects',
        component: SubjectsComponent,
      },
      {
        path: 'subjects/:id',
        component: SubjectComponent,
      },
      {
        path: 'subjects/:id/test/:testId',
        component: TestComponent,
      },
    ],
  },
];
