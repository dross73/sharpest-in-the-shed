import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    // Lazy-load the Home component when the root URL is requested. 
    loadComponent: () =>
      import('./pages/home/home').then((m) => m.Home),
    title: 'Sharpest in the Shed | Professional Knife Sharpening',
  },
];
