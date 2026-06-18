import { Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { MenuComponent } from './public/menu/menu.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  // Auth — sin layout (sin sidebar)
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.routes').then(a => a.authRoutes)
  },
  // Todo lo demás — con layout (con sidebar), requiere login
  {
    path: '',
    component: MenuComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'productos',
        loadChildren: () =>
          import('./modules/productos/productos.routes').then(p => p.productosRoutes)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
