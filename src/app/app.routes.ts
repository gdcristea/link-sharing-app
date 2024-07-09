import { Routes } from '@angular/router';
import {AppRoutes} from "./shared/routes/routes.enum";

export const routes: Routes = [
  {
    path: '',
    redirectTo: AppRoutes.PROFILE,
    pathMatch: 'full'
  },
  {
    path: AppRoutes.PROFILE,
    loadComponent: () => import('./pages/profile/profile.component').then((component) => component.ProfileComponent)
  },
  {
    path: AppRoutes.REGISTER,
    loadComponent: () => import('./pages/register/register.component').then((component) => component.RegisterComponent)
  },
  {
    path: AppRoutes.LOGIN,
    loadComponent: () => import('./pages/login/login.component').then((component) => component.LoginComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then((component) => component.NotFoundComponent)
  }
];
