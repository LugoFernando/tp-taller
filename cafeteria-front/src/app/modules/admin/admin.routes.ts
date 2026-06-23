import { Routes } from '@angular/router';

export const adminRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/admin-home/admin-home').then(m => m.AdminHomeComponent),
  },
  {
    path: 'cuentas',
    loadComponent: () =>
      import('./pages/admin-cuentas/admin-cuentas').then(m => m.AdminCuentasComponent),
  },
  {
    path: 'pedidos',
    loadComponent: () =>
      import('./pages/admin-pedidos/admin-pedidos').then(m => m.AdminPedidosComponent),
  },
  {
    path: 'productos/nuevo',
    loadComponent: () =>
      import('./pages/admin-producto-form/admin-producto-form').then(m => m.AdminProductoFormComponent),
  },
  {
    path: 'productos/editar/:id',
    loadComponent: () =>
      import('./pages/admin-producto-form/admin-producto-form').then(m => m.AdminProductoFormComponent),
  },
  {
    path: 'productos/detalle/:id',
    loadComponent: () =>
      import('./pages/admin-producto-detalle/admin-producto-detalle').then(m => m.AdminProductoDetalleComponent),
  },
  {
    path: 'productos',
    loadComponent: () =>
      import('./pages/admin-productos/admin-productos').then(m => m.AdminProductosComponent),
  },
];
