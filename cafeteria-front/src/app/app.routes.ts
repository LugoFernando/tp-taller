import { Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin.guard';

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
    path: 'admin',
    canActivate: [adminGuard],
    loadChildren: () =>
      import('./modules/admin/admin.routes').then(m => m.adminRoutes)
  },
  {
    path: 'productos',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./modules/productos/productos.routes').then(p => p.productosRoutes)
  },
  {
    path: 'carrito',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./modules/carrito/carrito.routes').then(m => m.carritoRoutes)
  },
  {
    path: 'pedidos',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./modules/pedidos/pedidos.routes').then(m => m.pedidosRoutes)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
