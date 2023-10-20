import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((mod) => mod.HomeComponent),
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./auth/auth.component').then((mod) => mod.AuthComponent),
  },
];
