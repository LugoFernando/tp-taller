import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Producto } from '../../interfaces/producto.interface';
import { ProductosService } from '../../../../api/services/productos/productos.service';
import { FormProducto } from '../../components/form-producto/form-producto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-producto',
  standalone: true,
  imports: [FormProducto, CommonModule],
  templateUrl: './update-producto.html',
  styleUrl: './update-producto.css'
})

export class UpdateProducto implements OnInit {

  productoService = inject(ProductosService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  producto!: Producto;

  id!: number;

  ngOnInit(): void {

    this.id = Number(
      this.activatedRoute.snapshot.paramMap.get('id')
    );

    this.detailProducto();
  }

  detailProducto() {

    this.productoService.detailProducto(this.id)
      .subscribe({

        next: (res: Producto) => {
          this.producto = res;
        },

        error: (err) => {
          console.error(err);
        }

      });

  }

  updateProducto(producto: Producto) {

    this.productoService.updateProducto(producto)
      .subscribe({

        next: (res) => {
          console.log('Producto actualizado', res);
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