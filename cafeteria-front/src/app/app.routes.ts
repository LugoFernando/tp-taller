import { Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.routes').then(a => a.authRoutes)
  },
  {
    path: 'menu',
    loadChildren: () =>
      import('./modules/productos/menu.routes').then(m => m.menuRoutes)
  },
  {
    path: 'productos',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./modules/productos/productos.routes').then(p => p.productosRoutes)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
