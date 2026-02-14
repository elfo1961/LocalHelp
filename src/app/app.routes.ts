import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash-screen',
    pathMatch: 'full',
  },
  {
    path: 'splash-screen',
    loadComponent: () => import('./pages/splash-screen/splash-screen.page').then( m => m.SplashScreenPage)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.routes)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.routes').then(m => m.routes)
  },

];
