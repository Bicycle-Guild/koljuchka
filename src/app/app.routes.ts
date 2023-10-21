import { Routes } from '@angular/router';
import { SubjectComponent } from './admin/subject/subject.component';
import { SubjectsComponent } from './admin/subjects/subjects.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((mod) => mod.HomeComponent),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./admin/admin.component').then((mod) => mod.AdminComponent),
    children: [
      {
        path: 'subjects',
        component: SubjectsComponent,
      },
      {
        path: 'subjects/:id',
        component: SubjectComponent,
      },
    ],
  },
];
