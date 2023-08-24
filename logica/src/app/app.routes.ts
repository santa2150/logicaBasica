import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'fibo',
    loadComponent: () => import('./fibo/fibo.page').then( m => m.FiboPage)
  },
  {
    path: 'facto',
    loadComponent: () => import('./facto/facto.page').then( m => m.FactoPage)
  },
  {
    path: 'primo',
    loadComponent: () => import('./primo/primo.page').then( m => m.PrimoPage)
  },
  {
    path: 'par',
    loadComponent: () => import('./par/par.page').then( m => m.ParPage)
  },
  {
    path: 'conjun',
    loadComponent: () => import('./conjun/conjun.page').then( m => m.ConjunPage)
  },
];
