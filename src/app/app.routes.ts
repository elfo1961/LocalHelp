import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
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
];
