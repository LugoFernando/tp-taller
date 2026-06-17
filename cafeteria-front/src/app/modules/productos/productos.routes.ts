import { Routes } from '@angular/router';
import { ListProducto } from './pages/list-producto/list-producto';
import { CreateProducto } from './pages/create-producto/create-producto';
import { UpdateProducto } from './pages/update-producto/update-producto';
import { DetailProducto } from './pages/detail-producto/detail-producto';

export const productosRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list-productos',
        component: ListProducto
      },
      {
        path: 'create-producto',
        component: CreateProducto
      },
      {
        path: 'update-producto/:id',
        component: UpdateProducto
      },
      {
        path: 'detail-producto/:id',
        component: DetailProducto
      },
      {
        path: '**',
        redirectTo: 'list-productos'
      }
    ]
  }
];