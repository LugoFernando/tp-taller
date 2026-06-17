import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductosService } from '../../../../api/services/productos/productos.service';
import { Producto } from '../../interfaces/producto.interface';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-detail-producto',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detail-producto.html',
  styleUrl: './detail-producto.css'
})

export class DetailProducto implements OnInit {

  constructor() {
  console.log('SE CREO DETAIL');
  }

  productoService = inject(ProductosService);
  activatedRoute = inject(ActivatedRoute);
  cd = inject(ChangeDetectorRef);

  producto: Producto | null = null;

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

          console.log('ANTES', this.producto);

          this.producto = res;

          console.log('DESPUES', this.producto);

          this.cd.detectChanges();
        },

        error: (err) => {
          console.error(err);
        }
       
      });
      setTimeout(() => {
      console.log('PRODUCTO ACTUAL', this.producto);
      }, 1000);

  }

  

}