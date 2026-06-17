import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { ProductosService } from '../../../../api/services/productos/productos.service';
import { Producto } from '../../interfaces/producto.interface';
import { FormProducto } from '../../components/form-producto/form-producto';

@Component({
  selector: 'app-create-producto',
  standalone: true,
  imports: [FormProducto],
  templateUrl: './create-producto.html',
  styleUrl: './create-producto.css'
})
export class CreateProducto {

  productoService = inject(ProductosService);
  router = inject(Router);

  createProducto(producto: Producto) {

    this.productoService.crearProducto(producto)
      .subscribe({

        next: (res) => {
          console.log('Producto creado', res);
        },

        error: (err) => {
          console.error(err);
        },

        complete: () => {
          this.router.navigate(['/productos/list-productos']);
        }

      });

  }

}