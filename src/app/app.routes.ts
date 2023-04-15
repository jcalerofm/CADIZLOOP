import { Routes } from '@angular/router';
import { MainPagePage } from './main-page/main-page.page';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    component: MainPagePage
  },
  {
    path: 'main-page',
    loadComponent: () => import('./main-page/main-page.page').then( m => m.MainPagePage)
  },
];
