import { Routes } from '@angular/router';

export const menuRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/menu-categorias/menu-categorias').then(m => m.MenuCategoriasComponent),
  },
  {
    path: 'categoria/:categoria',
    loadComponent: () =>
      import('./pages/menu-productos/menu-productos').then(m => m.MenuProductosComponent),
  },
  {
    path: 'producto/:id',
    loadComponent: () =>
      import('./pages/detalle-producto/detalle-producto').then(m => m.DetalleProductoComponent),
  },
];
